import React from "react";

const Signup1 = ({ setPage }) => {
  const handleNext = (e) => {
    e.preventDefault();
    setPage('2');
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPage('home');
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Join Us Now!</h1>
        <form onSubmit={handleNext}>
          <input type="text" placeholder="Favorite Music Genres" className="signin-input" required />
          <button type="submit" className="signin-button">Next</button>
          <p className="register-link">Step 1 of 3</p>
        </form>
        <form onSubmit={handleBack}>
            <button type="submit" className="back-button">Back</button>
        </form>
      </div>
    </div>
  );
}

export default Signup1;
