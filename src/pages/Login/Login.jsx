import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    let allError = {};

    if (!email) {
      allError.email = "Email is require";
    } else {
      if (!validator.isEmail(email)) {
        allError.email = "Pls Fill Valid Email!!";
      } else {
        allError.email = "";
      }
    }
    if (!password) {
      allError.password = "Password is require";
    } else {
      if (!validator.isStrongPassword(password)) {
        allError.password = "Pls Fill Strong Password!!";
      } else {
        allError.password = "";
      }
    }

    if (
      !email ||
      !validator.isEmail(email) ||
      !password ||
      !validator.isStrongPassword(password)
    ) {
      setError(allError);
    } else {
      let oldData = localStorage.getItem("formData");
      let oldArr = JSON.parse(oldData);
      oldArr.map((arr) => {
        if (email.length > 0 && password.length > 0) {
          if (arr.email === email && arr.password === password) {
            navigate("/social");
          } else {
            toast.error("Please check your email or password", {
              toastId: "error1",
            });
          }
        }
        return false;
      });
    }
  };
  const handleRegister = () => {
    navigate("/register");
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
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={onChangeEmail}
            />
            <span className="text-red">{error.email || ""}</span>
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={onChangePassword}
            />
            <span className="text-red">{error.password || ""}</span>
            <button className="loginButton" onClick={onSubmit}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
