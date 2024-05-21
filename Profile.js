import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1>Andranik Aroyan</h1>
      <p>I.T. Student</p>
      <button className="socials-button">My Socials</button>
      <div className="social-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fas fa-phone"></i>
        <i className="fab fa-snapchat-ghost"></i>
        <i className="fab fa-telegram"></i>
      </div>
    </div>
  );
}

export default Profile;
