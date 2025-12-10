// src/components/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgVideo from '../assets/Bg.mp4';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const adminOptions = [
    {
      title: "Manage Events",
      desc: "Create, edit and manage all event details.",
      route: "/admin/events",
    },
    {
      title: "Registrations",
      desc: "View and manage event registrations.",
      route: "/admin/registrations",
    },
    {
      title: "Manage Gallery",
      desc: "Upload and manage event photos.",
      route: "/admin/gallery",
    },
    {
      title: "Reports",
    desc: "View analytics, revenue, feedback and event statistics.",
      route: "/admin/reports",
    },
    {
      title: "Go to Home",
      desc: "Return to main home page.",
      route: "/",
    },
  ];

  return (
    <div style={{ position: "relative", width: "100%" }}>
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: -1,
        }}
      />

      {/* HEADER (centered) */}
      <div
        style={{
          width: "100%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",     // centered horizontally
          color: "white",
          textAlign: "center",      // center text
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "cursive",
            fontWeight: "700",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          Welcome To Your Dashboard<br/>"ADMIN"
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            marginTop: "10px",
            fontFamily: "cursive",
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          }}
        >
          
        </p>
      </div>

      {/* ADMIN OPTIONS CARDS */}
      <section style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
        <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "30px" }}>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "3rem",
              fontFamily: "cursive",
              fontWeight: "700",
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            Your Controls
          </h2>

          {adminOptions.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#51beb58c",
                borderRadius: "20px",
                padding: "25px",
                color: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(124,123,123,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              <div style={{ flex: 3 }}>
                <h2 style={{ fontFamily: "cursive", marginBottom: "10px" }}>
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>

              <div style={{ flex: 1, textAlign: "center" }}>
                <button
                  onClick={() => navigate(item.route)}
                  style={{
                    padding: "12px 25px",
                    background: "#007BFF",
                    border: "none",
                    color: "white",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "0.3s",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#007BFF")}
                >
                  Open
                </button>
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                padding: "15px 35px",
                fontSize: "1.1rem",
                fontFamily: "cursive",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a60000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
