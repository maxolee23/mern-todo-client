import React, {useContext} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const LogoutBtn = () => {
    const history = useHistory();
    const {getLoggedIn} = useContext(AuthContext);

    const logout = async () => {
        await axios.get("http://localhost:4000/auth/logout");
        await getLoggedIn();
        history.push("/login")
    }
    return (
        <button onClick={logout}>Log out</button>
    )
}

export default LogoutBtn
