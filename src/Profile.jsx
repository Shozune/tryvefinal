import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [moodAdaptiveBackground, setMoodAdaptiveBackground] = useState(true);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleAbout = () => {
    // Handle about functionality
    console.log("About clicked");
  };

  const handleProfileLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <button 
            className="menu-toggle"
            onClick={() => console.log('Menu clicked')}
          >
            ☰
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('home');
              navigate('/taskmanager');
            }}
          >
            <img src="/home-frame.svg" alt="Home" />
          </button>
          <button
            className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('tasks');
              navigate('/taskmanager?tab=tasks');
            }}
          >
            <img src="/task-frame.svg" alt="Tasks" />
          </button>
          <button
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('analytics');
              navigate('/taskmanager?tab=analytics');
            }}
          >
            <img src="/analytics-frame.svg" alt="Analytics" />
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar active">
            <img src="/small-logo.svg" alt="User Avatar" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="logo-container">
            <img src="/Logo.png" alt="Tryve Logo" style={{ width: 180, height: "auto" }} />
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </header>

        {/* Logout Confirmation Popup */}
        {showLogoutConfirm && (
          <div className="logout-popup-overlay">
            <div className="logout-popup">
              <p>Are you sure you want to logout?</p>
              <div className="logout-popup-actions">
                <button className="logout-confirm-btn" onClick={confirmLogout}>Yes</button>
                <button className="logout-cancel-btn" onClick={cancelLogout}>No</button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-header">
            <h1 className="profile-title">Account</h1>
          </div>

          <div className="profile-container">
            {/* User Profile Section */}
            <div className="user-profile-section">
              <div className="user-avatar-large">
                <div className="avatar-circle">
                  <div className="plant-icon">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35 75C35 65 42 60 50 60C58 60 65 65 65 75V85C65 90 60 95 50 95C40 95 35 90 35 85V75Z" fill="#8B4513"/>
                      <ellipse cx="50" cy="75" rx="20" ry="8" fill="#D2691E"/>
                      <path d="M30 45C30 35 35 25 45 20C50 17 55 17 60 20C70 25 75 35 75 45C75 55 70 60 60 60H45C35 60 30 55 30 45Z" fill="#4CAF50"/>
                      <path d="M45 45C45 35 50 25 60 20C65 17 70 17 75 20C85 25 90 35 90 45C90 55 85 60 75 60H60C50 60 45 55 45 45Z" fill="#66BB6A"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="user-info">
                <h2 className="user-name">Franz Justine Sarne</h2>
                <p className="user-email">franzjustinesarne@gmail.com</p>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="preferences-section">
              <h3 className="section-title">Preferences</h3>
              <div className="preference-item">
                <span className="preference-label">Mood Adaptive Background</span>
                <div className="toggle-container">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={moodAdaptiveBackground}
                      onChange={(e) => setMoodAdaptiveBackground(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="quick-actions-section">
              <h3 className="section-title">Quick Actions</h3>
              
              <button className="action-item" onClick={handleForgotPassword}>
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13S14 13.9 14 15S13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" fill="#666"/>
                  </svg>
                </div>
                <span className="action-label">Forgot Your Password</span>
              </button>

              <button className="action-item" onClick={handleAbout}>
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#666"/>
                  </svg>
                </div>
                <span className="action-label">About</span>
              </button>

              <button className="action-item logout-action" onClick={handleProfileLogout}>
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="#666"/>
                  </svg>
                </div>
                <span className="action-label">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}