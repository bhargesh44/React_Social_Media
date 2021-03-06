import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const onSubmit = (e) => {
    let allError = {};
    let ob = {
      username: username,
      email: email,
      password: password,
      rePassword: rePassword,
    };
    if (!username) {
      allError.username = "Username is require";
    } else {
      allError.userName = "";
    }
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
    if (!rePassword) {
      allError.rePassword = "RePassword is require";
    } else {
      if (!(rePassword === password)) {
        allError.rePassword = "Password Does not match!!";
      } else {
        allError.rePassword = "";
      }
    }

    if (
      !username ||
      !email ||
      !validator.isEmail(email) ||
      !password ||
      !validator.isStrongPassword(password) ||
      !rePassword ||
      rePassword !== password
    ) {
      setError(allError);
    } else {
      let oldData = localStorage.getItem("formData");

      if (oldData === null) {
        oldData = [];
        oldData.push(ob);
        localStorage.setItem("formData", JSON.stringify(oldData));
      } else {
        let oldArr = JSON.parse(oldData);
        oldArr.push(ob);
        localStorage.setItem("formData", JSON.stringify(oldArr));
        navigate("/");
      }
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
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
              <OutlinedInput
                type="text"
                placeholder="Username"
                className="loginInput"
                value={username}
                onChange={onChangeUsername}
               
              />
              <span className="text-red">{error.username || ""}</span>
              <OutlinedInput
                type="email"
                placeholder="Email"
                className="loginInput"
                value={email}
                onChange={onChangeEmail}
              />
              <span className="text-red">{error.email || ""}</span>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="loginInput"
                value={password}
                onChange={onChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <span className="text-red">{error.password || ""}</span>
              <OutlinedInput
                type={showRePassword ? "text" : "password"}
                placeholder="Password Again"
                className="loginInput"
                value={rePassword}
                onChange={onChangeRePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowRePassword(!showRePassword)}
                      edge="end"
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <span className="text-red">{error.rePassword || ""}</span>
              <button className="loginButton" onClick={onSubmit}>
                Sign Up
              </button>
              <button className="loginRegisterButton" onClick={handleLogin}>
                Log into Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
