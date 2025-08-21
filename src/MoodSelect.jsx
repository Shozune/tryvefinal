import React, { useState } from 'react';
import './MoodSelect.css';
import TryveLogo from './assets/tryvelogo.png';
import { useNavigate } from 'react-router-dom';

import HighEnergy from './assets/highenergy.png';
import LowEnergy from './assets/lowenergy.png';

function MoodSelect() {

  const [selectedMood, setSelectedMood] = useState('');
  const [energyLevel, setEnergyLevel] = useState(1);
  const navigate = useNavigate();

  const handleButtonClick = () => {
        navigate("/Homepage");
      };

  const moods = [
    { id: 'exhausted', emoji: '😴', label: 'Exhausted', color: '#2C2C2C' },
    { id: 'sad', emoji: '😢', label: 'Sad', color: '#4C63D2' }, 
    { id: 'anxious', emoji: '😰', label: 'Anxious', color: '#E74C3C' },
    { id: 'bored', emoji: '😑', label: 'Bored', color: '#95A5A6' }, 
    { id: 'neutral', emoji: '😐', label: 'Neutral', color: '#D5DBDB' },
    { id: 'content', emoji: '😊', label: 'Content', color: '#7FCDCD' }, 
    { id: 'calm', emoji: '😌', label: 'Calm', color: '#52C234' },
    { id: 'happy', emoji: '😄', label: 'Happy', color: '#FF8C00' }, 
    { id: 'motivated', emoji: '💪', label: 'Motivated', color: '#F7931E' }
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
  };

  const handleEnergyChange = (event) => {
    setEnergyLevel(parseInt(event.target.value));
  };

  const handleSaveAndContinue = () => {
    const moodData = {
      mood: selectedMood,
      energyLevel: energyLevel,
      timestamp: new Date().toISOString()
    };
    
    console.log('Mood data saved:', moodData);
    alert('Mood saved successfully!');
    navigate("/homepage");
  };

  const getSliderBackground = () => {
    const percentage = ((energyLevel - 1) / 4) * 100;
    return `linear-gradient(to right, #10b981 0%, #10b981 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
  };

  const getSelectedMoodColor = () => {
    const selectedMoodData = moods.find(mood => mood.id === selectedMood);
    return selectedMoodData ? selectedMoodData.color : '#ffffff';
  };


  const getModalStyle = () => {
    if (!selectedMood) return {};
    
    const moodColor = getSelectedMoodColor();
    return {
      background: `linear-gradient(135deg, ${moodColor}75, ${moodColor}75)`,
      borderRight: `4px solid ${moodColor}77`,
      boxShadow: `0 25px 50px -12px ${moodColor}50`
    };
  };

  // Generate dynamic styles for mood buttons
  const getMoodButtonStyle = (moodId, moodColor) => {
    const isSelected = selectedMood === moodId;
    
    if (isSelected) {
      return {
        background: `${moodColor}20`,
        borderColor: moodColor,
        boxShadow: `0 4px 6px -1px ${moodColor}30`,
        transform: 'scale(1.05)'
      };
    }
    
    return {};
  };

  return (
    <div className="bg-img">
      <div className="app-container">
        <div className="mood-modal" style={getModalStyle()}>
          
          <div className="app-header">
            <img className="tryve-logo" src={TryveLogo}/>
            <p className="subtitle">
              Push yourself gently, thrive emotionally
            </p>
          </div>

          <div className="mood-section">
            <h2 className="section-title">
              Today I am..
              <span className="section-emoji">🤔</span>
            </h2>
            
            <div className="mood-grid">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`mood-button ${selectedMood === mood.id ? 'selected' : ''}`}
                  style={getMoodButtonStyle(mood.id, mood.color)}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <div className="mood-label">{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mood-section">
            <h2 className="section-title">
              I feel..
              <span className="section-emoji">🤔</span>
            </h2>
            
            <div className="energy-container">
              <div className="energy-icon">
                <img src={LowEnergy} alt="Low energy" className="lowenergy-icon" />
                <span className="lowenergy-text">Low</span>
              </div>
              
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={energyLevel}
                  onChange={handleEnergyChange}
                  className="energy-slider"
                  style={{ background: getSliderBackground() }}
                />
                <div className="energy-value">
                  <span className="energy-badge">{energyLevel}</span>
                </div>
              </div>
          
              <div className="energy-icon">
                <img src={HighEnergy} alt="High energy" className="highenergy-icon" />
                <span className="highenergy-text">High</span>
              </div>
            </div>
          </div>

          <button 
            className="save-button"
            onClick={handleSaveAndContinue}>
            Save & Continue
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default MoodSelect;