import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setPasswordError("");
    setConfirmError("");

    // Validate password
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    // Validate password match
    if (newPassword !== confirmPassword) {
      setConfirmError("Passwords do not match");
      return;
    }

    // If validation passes - navigate back to login
    console.log('Password reset successful');
    navigate("/login");
  };

  return (
    <div className="background">
      <div className="login-card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/forgot-password")}>
          <img src="/back arrow.svg" alt="Back Arrow" className="back-arrow-img" />
          Back
        </button>

        {/* Title */}
        <div className="login-title" style={{ marginTop: "3rem" }}>
          <h1>Reset Password</h1>
          <p className="login-subtitle">
            Please select your contact details and we will send a verification code to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container" style={{ marginTop: "2rem" }}>
          {/* New Password Input */}
          <div className="input-group">
            <label className="input-label">New Password</label>
            <div className="input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="form-input reset-password-input"
                placeholder=""
                aria-label="New Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="password-toggle reset-password-toggle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z" fill={showNewPassword ? "#999" : "#999"}/>
                  {!showNewPassword && (
                    <path d="M2 2L22 22L20.59 23.41L18.18 21H12C7 21 2.73 17.89 1 13.5C1.69 11.97 2.75 10.63 4.06 9.56L2 7.5L2 2ZM12 6.5C16.97 6.5 21.24 9.61 23 14C22.07 16.64 20.07 18.81 17.5 20.06L15.64 18.2C16.47 17.32 17 16.2 17 15C17 12.24 14.76 10 12 10C10.8 10 9.68 10.53 8.8 11.36L7.11 9.67C8.61 8.56 10.24 8 12 8V6.5Z" fill="#999"/>
                  )}
                </svg>
              </button>
            </div>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="form-input reset-password-input"
                placeholder=""
                aria-label="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle reset-password-toggle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z" fill={showConfirmPassword ? "#999" : "#999"}/>
                  {!showConfirmPassword && (
                    <path d="M2 2L22 22L20.59 23.41L18.18 21H12C7 21 2.73 17.89 1 13.5C1.69 11.97 2.75 10.63 4.06 9.56L2 7.5L2 2ZM12 6.5C16.97 6.5 21.24 9.61 23 14C22.07 16.64 20.07 18.81 17.5 20.06L15.64 18.2C16.47 17.32 17 16.2 17 15C17 12.24 14.76 10 12 10C10.8 10 9.68 10.53 8.8 11.36L7.11 9.67C8.61 8.56 10.24 8 12 8V6.5Z" fill="#999"/>
                  )}
                </svg>
              </button>
            </div>
            {confirmError && <div className="error-message">{confirmError}</div>}
          </div>

          {/* Update Password Button */}
          <button type="submit" className="primary-btn" style={{ marginTop: "3rem" }}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}