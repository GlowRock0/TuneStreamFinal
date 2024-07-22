import React, { useState } from 'react';

const Login = ({ setPage, handleLogin}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleNext = (e) => {
        e.preventDefault();
        handleLogin(firstName, lastName);
        setPage('home');
        alert('Logged in successfully!');
      };

      const handleRegister = (e) => {
        e.preventDefault();
        setPage('1');
      };
      

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h1>Sign In</h1>
                <form onSubmit={handleNext}>
                <input type="text" placeholder="Username" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="signin-input" required/>
                <input type="password" placeholder="Password" value={lastName} onChange={(e) => setLastName(e.target.value)} className="signin-input" required/>
                <div className="signin-options">
                    <label>
                    <input type="checkbox" /> Remember Me
                    </label>
                </div>
                <button type="submit" className="signin-button">Login</button>
                <p className="register-link">Don’t have an account? <a href="#" onClick={handleRegister}>Register Here</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login