import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img
        src="/assets/images/404.jpg"
        alt="Page Not Found"
        className="notfound-image"
      />
      <h1 className="notfound-title">Oops! Page Not Found</h1>
      <p className="notfound-text">
        Looks like you’ve wandered off the learning path! <br />
        Don’t worry — even the best learners take a wrong turn sometimes.
      </p>
      <Link to="/" className="notfound-button">
        Back to Home
      </Link>
      <p className="notfound-footer">
        Still lost? Try exploring some new skills on <span>HySkill</span> 🌱
      </p>
    </div>
  );
};

export default NotFound;
