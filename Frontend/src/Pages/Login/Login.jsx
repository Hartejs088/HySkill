import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div className="login-container">
      <img src="/assets/images/1.png" alt="Decor" className="login-img left" />
      <div className="login-box">
        <h1 className="login-title">Welcome to <span>HySkill</span></h1>
        <p className="login-subtitle">
          Learn, share, and grow together — one skill at a time.
        </p>

        <button
          className={`google-btn ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleGoogleLogin}
        >
          <FaGoogle style={{ marginRight: "8px" }} /> Login with Google
        </button>
      </div>
      <img src="/assets/images/2.png" alt="Decor" className="login-img right" />
    </div>
  );
};

export default Login;
