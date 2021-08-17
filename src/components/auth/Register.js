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
            await getLoggedIn;
            history.push("/")
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div>
            <h1>Sign up</h1>

            <form onSubmit={signUp}>

                <label>First name</label>
                <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)}/>

                <label>Last name</label>
                <input type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)}/>

                <label>Email</label>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                <label>Confirm Password</label>
                <input type="password" onChange={(e) => setConfirm(e.target.value)}/>

                <button type="submit">Register</button>

                <p>Already have an account? Log in <Link to="/login">here</Link></p>
            </form>
        </div>
    )
}

export default Register
