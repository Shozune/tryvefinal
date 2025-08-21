import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import TaskManager from "./TaskManager";
import Profile from "./Profile";
import "./Landingscreen.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img src="/Logo.png" alt="Logo" className="logo" />
      <button className="button" onClick={() => navigate("/signup")}>
        Sign up
      </button>
      <button className="button" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/taskmanager" element={<TaskManager />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}