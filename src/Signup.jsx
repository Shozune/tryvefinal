import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); // Add this state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("Email must contain '@' and '.com'");
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to the Terms and Conditions and Privacy Policy');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setEmailError("");
    setPasswordError(""); // Clear password error on success
    console.log('Form submitted:', { name, email, password });
    alert('Account created successfully!');
  }

  const handleTermsClick = () => {
    // Navigate to terms page or open in new tab
    window.open('/terms', '_blank');
  };

  const handlePrivacyClick = () => {
    // Navigate to privacy page or open in new tab
    window.open('/privacy', '_blank');
  };

  return (
    <div className="background">
      <div className="card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/")}>
          <img src="/back arrow.svg" alt="Back Arrow" className="back-arrow-img" />
          Back
        </button>

        {/* Logo */}
        <div className="signup-logo-container">
          <div className="signup-logo">
            <img src="/signup-logo.png" alt="Signup Logo" style={{ height: "100px" }} />
          </div>
        </div>

        {/* Title */}
        <div className="signup-title">
          <h1>Sign up</h1>
          <p className="signup-subtitle">Create Account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container">
          {/* Name Input */}
          <div className="input-group">
            <label className="input-label">Name</label>
            <div className="input-wrapper">
              <img src="/userlogo.png" alt="" className="input-icon" />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-input"
                placeholder=""
                aria-label="Name"
                required
              />
            </div>
          </div>

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
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div className="input-wrapper">
              <img src="/confirmpassword.png" alt="" className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="form-input"
                placeholder=""
                aria-label="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="checkbox"
            />
            <label htmlFor="terms" className="checkbox-label">
              By signing in, you agree to our{' '}
              <span className="terms-link" onClick={handleTermsClick}>
                Terms and Conditions
              </span>
              {' | '}
              <span className="terms-link" onClick={handlePrivacyClick}>
                Privacy Policy
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="primary-btn">
            Register
          </button>

          {/* Login Link */}
          <div className="login-link-container">
            <span className="login-link-text">Have an Account?</span>
            <span
              className="login-link"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};