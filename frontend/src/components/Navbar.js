import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isUserLoggedIn = localStorage.getItem('token') || isAdmin;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin'); // remove admin flag
    navigate("/login");
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.57)",   // Semi-transparent black
          backdropFilter: "blur(6px)",             // Frosted glass effect
          position: "fixed",                        // Stays at top while scrolling
          top: 0,
          width: "100%",
          zIndex: 1000
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">EventSphere</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isAdmin && (
                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/events" ? "active" : ""}`} to="/events">Events</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`} to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/registration" ? "active" : ""}`} to="/registration">Registration</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
                  </li>
                </>
              )}

              {isAdmin && (
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`} to="/admin">Admin Dashboard</Link>
                </li>
              )}
            </ul>

            {!isUserLoggedIn ? (
              <form className="d-flex">
                <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup">SignUp</Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            )}
          </div>
        </div>
      </nav>

      {/* Add spacing so content is not hidden behind fixed navbar */}
      <div style={{ height: "70px" }}></div>
    </div>
  )
}

export default Navbar;
