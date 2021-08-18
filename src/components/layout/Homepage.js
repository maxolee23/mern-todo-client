import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

import Register from '../auth/Register';
import Login from '../auth/Login';

import TodosPage from './TodosPage';
import TodoDetails from '../../components/todos/TodoDetails';

const Homepage = () => {
    const {loggedIn} = useContext(AuthContext)
    return (
        <div>
            {
                !loggedIn && <h1>Homepage</h1>
            }
            
            <Switch>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <TodosPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default Homepage
