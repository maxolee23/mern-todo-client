import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import LogoutBtn from '../auth/LogoutBtn';

const Navbar = () => {

    const {loggedIn} = useContext(AuthContext)
    return (
                <div className="navbar">
                    <h3>TodoList</h3>
                    {
                loggedIn && <LogoutBtn />
                    }
                </div>
            
        
    )
}

export default Navbar
