import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // State variables to store form data and validation errors
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const handleLogin = () => {
        // Basic validation
        const errors = {};
        if (!username.trim()) {
            errors.username = "Username is required";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!phone.trim()) {
            errors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone is invalid";
        }

        if (Object.keys(errors).length === 0) {
            // No errors, proceed with registration
            // Store form data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);

            // Navigate to dashboard
            navigate('/dashboard');
        } else {
            // Set errors and prevent registration
            setErrors(errors);
        }
    }

    return (
        <div>
            <h1 className='loginh1'>Register Page</h1>
            <div className="loginpage">
                <div className="input-box">
                    <label>UserName</label><br />
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <div className="error">{errors.username}</div>}
                </div>
                <div className="input-box">
                    <label>Password</label><br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="input-box">
                    <label>Email</label><br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="input-box">
                    <label>Phone</label><br />
                    <input
                        type="tel"
                        placeholder="123 456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
                <button onClick={handleLogin} className='button1'>Register</button>
            </div>
        </div>
    );
}

export default Register;
