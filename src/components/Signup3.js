import React, { useState } from 'react';

const Signup3 = ({ setPage, handleLogin }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage('home');
    handleLogin(firstName, lastName);
    alert('Registration complete!');
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPage('2');
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Join Us Now!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="signin-input" required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="signin-input" required />
          <button type="submit" className="signin-button">Finish</button>
          <p className="register-link">Step 3 of 3</p>
        </form>
        <form onSubmit={handleBack}>
            <button type="submit" className="back-button">Back</button>
        </form>
      </div>
    </div>
  );
}

export default Signup3;
