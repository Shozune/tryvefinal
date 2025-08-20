import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TaskManager.css";

export default function TaskManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Handle query parameters for navigation from other components
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  // Sample data for the dashboard
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

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const renderMoodDots = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`mood-dot ${i < count ? 'active' : 'inactive'}`}
      />
    ));
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
            onClick={() => setActiveTab('home')}
          >
            <img src="/home-frame.svg" alt="Home" />
          </button>
          <button
            className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            <img src="/task-frame.svg" alt="Tasks" />
          </button>
          <button
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <img src="/analytics-frame.svg" alt="Analytics" />
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar" onClick={handleProfileClick}>
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

        {/* Dashboard Content */}
        {activeTab === 'analytics' && (
          <div className="dashboard-content">
            <div className="content-header">
              <h1 className="page-title">Task Manager</h1>
            </div>

            <div className="dashboard-grid">
              {/* Left Column - Weekly Summary */}
              <div className="summary-section">
                <h2 className="section-title">Weekly Summary</h2>

                <div className="summary-cards">
                  <div className="summary-card mood-card">
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
                      <div className="mood-dots">
                        {renderMoodDots(item.dots)}
                      </div>
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
      </div>
    </div>
  );
}