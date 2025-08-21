import React from 'react';
import './Homepage.css';
import './TaskManager.css'; // Add this line for TaskManager styles
import TryveLogo from './assets/tryvelogo.png';
import Sunset from './assets/sunset.png';
import { useNavigate } from 'react-router-dom'; // Add this import

import { Menu, House, ChartLine, ClipboardList, Leaf } from 'lucide-react';

const Homepage = () => {
  const navigate = useNavigate(); // Add this line

  return (
    <div className="homepage">
      <div className="sidebar">
        {/* Hamburger / Menu Icon */}
        <div className="menu-icon">
          <Menu size={24} />
        </div>

        <div className="nav-icons">
          <div className="nav-icon home-icon" onClick={() => navigate('/homepage')}>
            <House size={22} />
          </div>
          <div className="nav-icon" onClick={() => navigate('/taskmanager')}>
            <ChartLine size={22} />
          </div>
          <div className="nav-icon" onClick={() => navigate('/taskmanager')}>
            <ClipboardList size={22} />
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="plant-icon" onClick={() => navigate('/profile')}>🌱</div>
        </div>
      </div>

      <div className="main-content">
        <header className="header">
          <img className="tryve-logo" src={TryveLogo}/>
          <div className="user-profile">
            <img className="avatar" src={Sunset}/>
          </div>
        </header>

        <div className="greeting-section">
          <h1 className="greeting">Good Evening, Franz! 👋</h1>
          <div className="date-time">
            <span>Saturday, August 8, 2025</span>
            <span className="time">8:00 AM</span>
          </div>
        </div>

        <div className="dashboard-content">
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
                <button className="update-mood-btn">UPDATE MOOD</button>
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
                <a href="#" className="see-all">See All</a>
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
                    <span className="task-title">System Integration Assignment</span>
                    <span className="task-due">Due in 3 days</span>
                  </div>
                </div>
                <div className="task-item green-border">
                  <input type="checkbox" className="task-checkbox" />
                  <div className="task-info">
                    <span className="task-title">System Integration Assignment</span>
                    <span className="task-due">Due in 3 days</span>
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
    </div>
  );
};

export default Homepage;