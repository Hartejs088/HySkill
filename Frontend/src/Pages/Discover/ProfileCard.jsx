import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Separate CSS file

const ProfileCard = ({ profileImageUrl, bio, name, skills, rating, username }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={profileImageUrl} alt={name} />
      <h3 className="profile-name">{name}</h3>
      <h6 className="profile-rating">Rating: {rating} ⭐</h6>
     
      <Link to={`/profile/${username}`}>
        <button className="profile-btn">View Profile</button>
      </Link>
      <div className="profile-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
