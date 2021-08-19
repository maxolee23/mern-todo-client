import React, {useState, useContext} from 'react';
import axios from 'axios';

import {useHistory, Link} from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");

    const history = useHistory();
    const {getLoggedIn} = useContext(AuthContext);

    const signUp = async (e) => {
        e.preventDefault();
        const data = {firstName, lastName, email, password, confirmPassword};
        try {
            await axios.post("http://localhost:4000/auth/register", data);
            await getLoggedIn();
            history.push("/")
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }
    return (
        <div className="auth-container-card">
            <div className="auth-card-header">
            <h1 className="auth-card-title">Sign up</h1>
            </div>
            <form className="register-form" onSubmit={signUp}>

                <div className="names-container">
                <div className="names-label">
                <label>First name</label>
                <input className="names-input"  type="text" placeholder="Ex. John" onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className="names-label">
                <label>Last name</label>
                <input className="names-input" type="text" placeholder="Ex. Doe" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                </div>

                <label className="login-label">Email</label>
                <input className="login-input" type="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}/>

                <label className="login-label" >Password</label>
                <input className="login-input" type="password" onChange={(e) => setPassword(e.target.value)}/>

                <label className="login-label" >Confirm Password</label>
                <input className="login-input" type="password" onChange={(e) => setConfirm(e.target.value)}/>

                <div className="btn-container">
                <button className="register-submit" type="submit">Register</button>
                </div>

                <p className="auth-toggle">Already have an account? Log in <Link to="/login">here</Link></p>
            </form>
        </div>
    )
}

export default Register
