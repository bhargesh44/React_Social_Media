import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialMedia.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" onClick={handleLogin}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
