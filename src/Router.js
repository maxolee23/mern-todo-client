import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AuthContext from './context/AuthContext';

import Homepage from './components/layout/Homepage';
import Navbar from './components/layout/Navbar';
import TodosPage from './components/layout/TodosPage';

const Router = () => {
    const context = useContext(AuthContext)
    // console.log(context)
    return (
        <BrowserRouter>
        <div className="app">
            <Navbar />
            <Homepage />
        </div>
            
        
        </BrowserRouter>
    )
}

export default Router
