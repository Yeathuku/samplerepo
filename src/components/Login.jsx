import React, { useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      navigate('/Hovers'); 
      
    };
    const changepage = () => {
      navigate('/UseFrom'); 
    }
    return(
        
       <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
              <a href='/useform' onClick={changepage}>create a new account?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
        
    )
}
export default Login;