import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../assets/Bg.mp4'; // Background video
import API_URL from '../config';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch(`${API_URL}/api/auth/createuser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials");
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

      {/* Signup Card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '400px',
        padding: '40px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
        color: 'white',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'cursive' }}>
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={onChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              minLength={5}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              onChange={onChange}
              minLength={5}
              required
              style={inputStyle}
            />
          </div>
        </form>

        {/* Signup button outside form at center bottom */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: '12px 25px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Signup
          </button>
        </div>
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

export default Signup;
