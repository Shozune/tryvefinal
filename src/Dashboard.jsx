import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [moodAdaptiveBackground, setMoodAdaptiveBackground] = useState(true);
  const navigate = useNavigate();

  // Sample data for dashboard/analytics
  const weeklyData = {
    averageMood: "Content",
    averageEnergy: 4.85,
    tasksCompleted: 10,
    streakRecord: 7
  };

  const moodTrendData = [
    { day: "Mon", mood: 5, dots: 5 },
    { day: "Tue", mood: 4.5, dots: 5 },
    { day: "Wed", mood: 4, dots: 4 },
    { day: "Thu", mood: 3.5, dots: 4 },
    { day: "Fri", mood: 3, dots: 4 },
    { day: "Sat", mood: 2.5, dots: 3 },
    { day: "Sun", mood: 1, dots: 2 }
  ];

  const moodDistribution = {
    low: 3,
    neutral: 5,
    positive: 12
  };

  // Sidebar navigation
  const handleSidebarNav = (tab) => {
    setActiveTab(tab);
  };

  // Logout logic
  const handleLogout = () => setShowLogoutConfirm(true);
  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate("/");
  };
  const cancelLogout = () => setShowLogoutConfirm(false);

  // Profile actions
  const handleForgotPassword = () => navigate("/forgot-password");
  const handleAbout = () => alert("About clicked");
  const handleProfileLogout = () => navigate("/");

  // Helper for analytics mood dots
  const renderMoodDots = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`mood-dot ${i < count ? "active" : "inactive"}`} />
    ));

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="menu-toggle" onClick={() => {}}>
            ☰
          </button>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleSidebarNav("home")}
          >
            <img src="/home-frame.svg" alt="Home" />
          </button>
          <button
            className={`nav-item ${activeTab === "tasks" ? "active" : ""}`}
            onClick={() => handleSidebarNav("tasks")}
          >
            <img src="/task-frame.svg" alt="Tasks" />
          </button>
          <button
            className={`nav-item ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => handleSidebarNav("analytics")}
          >
            <img src="/analytics-frame.svg" alt="Analytics" />
          </button>
          <button
            className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => handleSidebarNav("profile")}
          >
            <img src="/small-logo.svg" alt="Profile" />
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
                <button className="logout-confirm-btn" onClick={confirmLogout}>
                  Yes
                </button>
                <button className="logout-cancel-btn" onClick={cancelLogout}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Home Tab - Homepage Content */}
        {activeTab === "home" && (
          <div className="dashboard-content">
            <div className="greeting-section">
              <h1 className="greeting">Good Evening, Franz! 👋</h1>
              <div className="date-time">
                <span>Saturday, August 8, 2025</span>
                <span className="time">8:00 AM</span>
              </div>
            </div>
            <div className="homepage-grid">
              <div className="left-column">
                <div className="card streak-card">
                  <p className="streak-text">Every step counts towards your goals!</p>
                  <div className="streak-content">
                    <div className="cat-emoji">😺</div>
                    <div className="streak-info">
                      <span className="fire-icon">🔥</span>
                      <span className="streak-label">DAY 3 STREAK</span>
                    </div>
                  </div>
                </div>
                <div className="card mood-card">
                  <div className="mood-content">
                    <div className="mood-emoji">😴</div>
                    <div className="mood-info">
                      <h3>Exhausted</h3>
                      <p>Energy: 3/5</p>
                    </div>
                    <button className="update-mood-btn" onClick={() => navigate("/moodselect")}>
                      UPDATE MOOD
                    </button>
                  </div>
                </div>
                <div className="card focus-card">
                  <div className="focus-header">
                    <span className="plus-icon">⊕</span>
                    <span>FOCUS SESSION</span>
                  </div>
                  <div className="timer">25 : 00</div>
                  <div className="timer-controls">
                    <button className="play-btn">▶</button>
                    <button className="reset-btn">↻</button>
                  </div>
                </div>
              </div>
              <div className="right-column">
                <div className="tasks-section">
                  <div className="tasks-header">
                    <h2>Tasks for Today</h2>
                    <a href="#" className="see-all">
                      See All
                    </a>
                  </div>
                  <div className="task-list">
                    <div className="task-item red-border">
                      <input type="checkbox" className="task-checkbox" />
                      <div className="task-info">
                        <span className="task-title">System Integration Assignment</span>
                        <span className="task-due">Due in 3 days</span>
                      </div>
                    </div>
                    <div className="task-item yellow-border">
                      <input type="checkbox" className="task-checkbox" />
                      <div className="task-info">
                        <span className="task-title">Database Design Project</span>
                        <span className="task-due">Due in 5 days</span>
                      </div>
                    </div>
                    <div className="task-item green-border">
                      <input type="checkbox" className="task-checkbox" />
                      <div className="task-info">
                        <span className="task-title">Team Meeting Preparation</span>
                        <span className="task-due">Due tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="music-corner">
                  <div className="spotify-icon"></div>
                  <div className="music-info">
                    <h3>Music Corner</h3>
                    <p>Feeling good? Or need a pick-me-up?</p>
                  </div>
                  <button className="spotify-btn">OPEN SPOTIFY</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === "tasks" && (
          <div className="dashboard-content">
            <div className="content-header">
              <h1 className="page-title">Task Manager</h1>
            </div>
            <div className="tasks-section">
              <div className="tasks-header">
                <h2>All Tasks</h2>
                <button className="add-task-btn">Add Task</button>
              </div>
              <div className="task-list">
                <div className="task-item red-border">
                  <input type="checkbox" className="task-checkbox" />
                  <div className="task-info">
                    <span className="task-title">System Integration Assignment</span>
                    <span className="task-due">Due in 3 days</span>
                  </div>
                  <div className="task-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <div className="task-item yellow-border">
                  <input type="checkbox" className="task-checkbox" />
                  <div className="task-info">
                    <span className="task-title">Database Design Project</span>
                    <span className="task-due">Due in 5 days</span>
                  </div>
                  <div className="task-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
                <div className="task-item green-border">
                  <input type="checkbox" className="task-checkbox" />
                  <div className="task-info">
                    <span className="task-title">Team Meeting Preparation</span>
                    <span className="task-due">Due tomorrow</span>
                  </div>
                  <div className="task-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="dashboard-content">
            <div className="content-header">
              <h1 className="page-title">Analytics</h1>
            </div>
            <div className="analytics-grid">
              {/* Left Column - Weekly Summary */}
              <div className="summary-section">
                <h2 className="section-title">Weekly Summary</h2>
                <div className="summary-cards">
                  <div className="summary-card mood-summary-card">
                    <div className="mood-emoji">😊</div>
                    <div className="summary-content">
                      <div className="summary-label">Average Mood</div>
                      <div className="summary-value">{weeklyData.averageMood}</div>
                    </div>
                  </div>
                  <div className="summary-card energy-card">
                    <div className="summary-content">
                      <div className="summary-label">Average Energy</div>
                      <div className="summary-value">{weeklyData.averageEnergy}</div>
                    </div>
                  </div>
                  <div className="summary-card tasks-card">
                    <div className="summary-content">
                      <div className="summary-label">Tasks Completed</div>
                      <div className="summary-value">{weeklyData.tasksCompleted}</div>
                    </div>
                  </div>
                  <div className="summary-card streak-card">
                    <div className="summary-content">
                      <div className="summary-label">Streak Record</div>
                      <div className="summary-value">{weeklyData.streakRecord}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column - Mood Analytics */}
              <div className="analytics-section">
                <h2 className="section-title">Weekly Mood Trend</h2>
                <div className="mood-trend-chart">
                  {moodTrendData.map((item, index) => (
                    <div key={index} className="mood-trend-row">
                      <div className="day-label">{item.day}</div>
                      <div className="mood-bar-container">
                        <div
                          className="mood-bar"
                          style={{ width: `${(item.mood / 5) * 100}%` }}
                        />
                      </div>
                      <div className="mood-dots">{renderMoodDots(item.dots)}</div>
                    </div>
                  ))}
                </div>
                <div className="mood-distribution">
                  <h3 className="distribution-title">Mood Distribution</h3>
                  <div className="distribution-item">
                    <div className="distribution-label">Low</div>
                    <div className="distribution-bar-container">
                      <div
                        className="distribution-bar low-mood"
                        style={{ width: `${(moodDistribution.low / 20) * 100}%` }}
                      />
                    </div>
                    <div className="distribution-value">{moodDistribution.low}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="distribution-label">Neutral</div>
                    <div className="distribution-bar-container">
                      <div
                        className="distribution-bar neutral-mood"
                        style={{ width: `${(moodDistribution.neutral / 20) * 100}%` }}
                      />
                    </div>
                    <div className="distribution-value">{moodDistribution.neutral}</div>
                  </div>
                  <div className="distribution-item">
                    <div className="distribution-label">Positive</div>
                    <div className="distribution-bar-container">
                      <div
                        className="distribution-bar positive-mood"
                        style={{ width: `${(moodDistribution.positive / 20) * 100}%` }}
                      />
                    </div>
                    <div className="distribution-value">{moodDistribution.positive}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="dashboard-content">
            <div className="content-header">
              <h1 className="page-title">Account</h1>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13S14 13.9 14 15S13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" fill="#666"/>
                    </svg>
                  </div>
                  <span className="action-label">Forgot Your Password</span>
                </button>
                <button className="action-item" onClick={handleAbout}>
                  <div className="action-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#666"/>
                    </svg>
                  </div>
                  <span className="action-label">About</span>
                </button>
                <button className="action-item logout-action" onClick={handleProfileLogout}>
                  <div className="action-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="#666"/>
                    </svg>
                  </div>
                  <span className="action-label">Log Out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}