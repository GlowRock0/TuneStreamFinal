import React from 'react';

const Profile = ({ setPage, user, handleLogout }) => {
  const handleBack = (e) => {
    e.preventDefault();
    setPage('home');
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1>Your Profile</h1>
        <div className="profile-info">{user.firstName} {user.lastName}</div>
        <div className="profile-info"># of Playlists: 10</div>
        <div className="profile-info"># of Liked Songs: 50</div>
        <div className="profile-info large">Minutes Listened: 12,345</div>
        <form onSubmit={handleLogoutClick}>
          <button type="submit" className="logout-button">Logout</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;

