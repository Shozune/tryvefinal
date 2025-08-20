import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    // Simulate verification process
    setTimeout(() => {
      navigate("/reset-password");
    }, 1000);
  };

  return (
    <div className="background">
      <div className="login-card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/login")}>
          <img src="/back arrow.svg" alt="Back Arrow" className="back-arrow-img" />
          Back
        </button>

        {/* Title */}
        <div className="login-title" style={{ marginTop: "3rem" }}>
          <h1>Forgot Password</h1>
          <p className="login-subtitle">
            Please select your contact details and we will send a verification code to reset your password.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods-container">
          {/* Phone Number Option */}
          <div 
            className={`contact-method ${selectedMethod === 'phone' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('phone')}
          >
            <div className="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.56 4.04 6.32 5.84C6.44 6.12 6.36 6.44 6.12 6.68L4.92 7.88C6.8 11.4 9.6 14.2 13.12 16.08L14.32 14.88C14.56 14.64 14.88 14.56 15.16 14.68C16.96 15.44 18.92 15.84 20.92 15.84C21.52 15.84 22 16.32 22 16.92Z" fill="#333"/>
              </svg>
            </div>
            <div className="contact-method-content">
              <div className="contact-method-title">Phone Number</div>
              <div className="contact-method-value">* * * * * * * * 8 8</div>
            </div>
          </div>

          {/* Email Option */}
          <div 
            className={`contact-method ${selectedMethod === 'email' ? 'selected' : ''}`}
            onClick={() => handleMethodSelect('email')}
          >
            <div className="contact-method-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#333"/>
              </svg>
            </div>
            <div className="contact-method-content">
              <div className="contact-method-title">Recovery Email</div>
              <div className="contact-method-value">ft**********@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}