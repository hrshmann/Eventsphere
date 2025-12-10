// src/components/ReportsDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const ReportsDashboard = () => {
  const navigate = useNavigate();

  const reportOptions = [
    {
      title: "Resource & Inventory Report",
      desc: "Track equipment, consumables, and resource usage for events.",
      route: "/admin/reports/resource-inventory",
      color: "#FF6B6B", // Red-ish
    },
    {
      title: "Feedback & Ratings Report",
      desc: "View participant feedback and ratings for each event.",
      route: "/admin/reports/feedback",
      color: "#4ECDC4", // Teal
    },
    {
      title: "Revenue & Payments Report",
      desc: "View revenue generated, payment history, refunds, and earnings.",
      route: "/admin/reports/revenue",
      color: "#FFD93D", // Yellow
    },
    {
      title: "Event Statistics Report",
      desc: "Overview of registrations, attendance, popularity, and performance.",
      route: "/admin/reports/statistics",
      color: "#6A4C93", // Purple
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

      {/* Header */}
      <div
        style={{
          width: "100%",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
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
          Reports Dashboard
        </h1>
        <p
          style={{
            marginTop: "10px",
            fontSize: "1.2rem",
            fontFamily: "cursive",
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          }}
        >
          Analyze performance, revenue, feedback, and inventory details.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "20px",
            marginLeft: "-900px",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            border: "none",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          ← Back
        </button>
      </div>

      {/* Flags */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "40px 0",
          gap: "30px",
        }}
      >
        {reportOptions.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            style={{
              width: "220px",
              height: "220px",
              background: item.color,
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              color: "white",
              padding: "20px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
            }}
          >
            <div>
              <h2 style={{ fontFamily: "cursive", fontSize: "1.2rem" }}>
                {item.title}
              </h2>
              <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  padding: "8px 15px",
                  background: "rgba(0,0,0,0.3)",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.3)")}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent div click
                  navigate(item.route);
                }}
              >
                Check
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ReportsDashboard;
