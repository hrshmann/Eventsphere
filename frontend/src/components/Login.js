// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../assets/Bg.mp4'; // Background video
import API_URL from '../config';

const ADMIN_EMAIL = "admin@example.com"; // fixed admin email
const ADMIN_PASSWORD = "admin123";       // fixed admin password

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if admin
    if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true'); // store admin flag
      navigate("/admin"); // navigate to admin dashboard
      return;
    }

    // Normal user login via API
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem('token', json.authtoken);
        localStorage.setItem('isAdmin', 'false'); // mark as normal user
        navigate("/"); // redirect to user home
      } else {
        alert("Invalid Details");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Try again later.");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: -1,
      }} />

      {/* Card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '400px',
        height: '500px',
        padding: '40px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
        color: 'white',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'cursive' }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px', position: 'relative' }}>
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
              style={{ ...inputStyle, paddingRight: '40px' }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '35%',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {/* Login button inside card */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              type="submit"
              style={{
                padding: '12px 25px',
                marginTop:'70px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: 'white',
};

export default Login;
