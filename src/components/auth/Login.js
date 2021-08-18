import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    // console.log(getLoggedIn)

    const submit = async(e) => {
        e.preventDefault();
        const data = {email, password};
        try {
            await axios.post("http://localhost:4000/auth/login", data)
            await getLoggedIn();
            history.push("/")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={submit}>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                <button>Log in</button>
                <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
            </form>
        </div>
    )
}

export default Login
