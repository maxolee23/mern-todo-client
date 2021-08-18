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
                    !loggedIn &&
                    <div className="home-container">
                        
                        
                        
                    <Switch>  
                    <Route exact path="/signup">
                    <h1 className="mantra">Create an account today, and start organizing your life</h1>
                    <Register />
                    </Route>
                    <Route exact path="/login">
                    <h1 className="mantra">A personalized todo list, just for you.</h1>
                    <Login />
                    </Route>
                    </Switch>
                    </div>
                }
                
                {
                    loggedIn &&
                    <Switch>
                    <Route exact path="/">
                    <TodosPage/>
                    </Route>
                    </Switch>
                }
                
            
        </div>
    )
}

export default Homepage
