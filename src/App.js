import Router from './Router';
import {AuthContextProvider} from './context/AuthContext';
import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />  
      </AuthContextProvider>
    
  );
}

export default App;
