import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Landingscreen.css';
import './MoodSelect.css';
import './Landingscreen.css'; // Use Landingscreen styles
import Landingscreen from './Landingscreen.jsx'; // Use Landingscreen component
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import ResetPassword from './ResetPassword.jsx';
import MoodSelect from './MoodSelect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingscreen />} /> {/* Landingscreen is now the first screen */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/moodselect" element={<MoodSelect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);