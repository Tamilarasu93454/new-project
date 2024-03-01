

import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 


function LoginPage(){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
  
    const navigate = useNavigate();
  
    const handleRegister= ()=>{
      navigate('/register')
    }
  
    const handleLogin = () => {
      // Check if the entered credentials are valid (for simplicity, using hardcoded values).
      if (username === 'admin' && password === 'admin123') {
        // If valid, navigate to the dashboard.
        navigate('/dashboard');
      } else {
        // If invalid, you can show an error message or take other actions.
        setError('Invalid credentials');
      }
    };

    
  return( 
     <div>
             <h1 className='loginh1 my-5'>Login Page</h1>
      <div className="loginpage my-5" >
        <div className="input-box">
          <label>UserName</label><br/>
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div><p>{error}</p></div>

        </div>
        <div className="input-box">
          <label>Password</label><br/>
          <input
            type="password" // Change to password type for security
            placeholder="admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div><p>{error}</p></div>
        </div>
        <button onClick={handleLogin} className='button1'>Login</button>
        <button onClick={handleRegister} className='button1 ms-5'>Register</button>
      </div>
    </div>
  )
}
export default LoginPage;

