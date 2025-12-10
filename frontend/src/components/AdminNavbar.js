// src/components/AdminNavbar.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.57)",
        backdropFilter: "blur(6px)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin">Admin Panel</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar" aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/admin/events" ? "active" : ""}`} to="/admin/events">Manage Events</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/admin/registrations" ? "active" : ""}`} to="/admin/registrations">Registrations</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/admin/gallery" ? "active" : ""}`} to="/admin/gallery">Manage Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/admin/users" ? "active" : ""}`} to="/admin/users">Manage Users</Link>
            </li>
          </ul>
          <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar;
