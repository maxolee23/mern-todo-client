import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import LogoutBtn from '../auth/LogoutBtn';

const Navbar = () => {

    const {loggedIn} = useContext(AuthContext)
    return (
        <div>
            Navbar
            {
                loggedIn && <LogoutBtn />
            }
        </div>
    )
}

export default Navbar
