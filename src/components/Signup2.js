import React from "react";

const Signup2 = ({ setPage }) => {
  const handleNext = (e) => {
    e.preventDefault();
    setPage('3');
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPage('1');
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Join Us Now!</h1>
        <form onSubmit={handleNext}>
          <input type="text" placeholder="Username" className="signin-input" required />
          <input type="password" placeholder="Password" className="signin-input" required />
          <button type="submit" className="signin-button">Next</button>
          <p className="register-link">Step 2 of 3</p>
        </form>
        <form onSubmit={handleBack}>
            <button type="submit" className="back-button">Back</button>
        </form>
      </div>
    </div>
  );
}

export default Signup2;
