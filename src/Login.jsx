import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("Email must contain '@' and '.com'");
      return;
    }

    // Validate password (example: minimum 6 characters)
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    // If validation passes - navigate to TaskManager
    console.log('Login submitted:', { email, password });
    navigate("/taskmanager");
  }

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleGoogleLogin = () => {
    // Handle Google authentication - also navigate to TaskManager on success
    console.log('Google login clicked');
    // Simulate successful Google login
    navigate("/taskmanager");
  };

  return (
    <div className="background">
      <div className="login-card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/")}>
          <img src="/back arrow.svg" alt="Back Arrow" className="back-arrow-img" />
          Back
        </button>

        {/* Logo */}
        <div className="login-logo-container">
          <img src="/signup-logo.png" alt="Login Logo" className="login-logo" />
        </div>

        {/* Title */}
        <div className="login-title">
          <h1>Welcome back!</h1>
          <p className="login-subtitle">Login Account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container">
          {/* Email Input */}
          <div className="input-group">
            <label className="input-label">E-mail</label>
            <div className="input-wrapper">
              <img src="/emaillogo.png" alt="" className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-input"
                placeholder=""
                aria-label="E-mail"
                required
              />
            </div>
            {emailError && <div className="error-message">{emailError}</div>}
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <img src="/passwordlogo.png" alt="" className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="form-input"
                placeholder=""
                aria-label="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {passwordError && <div className="error-message">{passwordError}</div>}

            {/* Forgot Password Link */}
            <div className="forgot-password-container">
              <span 
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="primary-btn">
            Login
          </button>

          {/* Sign Up Link */}
          <div className="signup-link-container">
            <span className="signup-link-text">Don't have an account?</span>
            <span
              className="signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </div>

          {/* Divider */}
          <div className="divider-container">
            <span className="divider-text">or</span>
          </div>

          {/* Google Login Button */}
          <button 
            type="button" 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            {/* Replace this img src with your own Google icon */}
            <img src="/public/Google__G__logo.svg.webp" alt="Google" className="google-icon" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}