// src/components/EventStatisticsReport.js
import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const EventStatisticsReport = () => {
  const navigate = useNavigate();

  const stats = [
    { event: "Tech Talk", registered: 50, attended: 45, popularity: "High" },
    { event: "Workshop", registered: 30, attended: 28, popularity: "Medium" },
    { event: "Seminar", registered: 40, attended: 35, popularity: "Medium" },
    { event: "Conference", registered: 80, attended: 75, popularity: "High" },
    { event: "Cultural Night", registered: 60, attended: 55, popularity: "High" },
    { event: "Art Workshop", registered: 25, attended: 20, popularity: "Low" },
  ];

  // Function to get circle color based on popularity
  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case "High":
        return "red";
      case "Medium":
        return "yellow";
      case "Low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", paddingBottom: 50 }}>
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

      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.25)",
          zIndex: -1,
        }}
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          border: "none",
          color: "white",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
      >
        ← Back
      </button>

      <div style={{ padding: "80px 20px", color: "white" }}>
        <h1 style={{ fontFamily: "cursive", textAlign: "center", marginBottom: 40 }}>
          Event Statistics Report
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255,255,255,0.95)",
                color: "black",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                position: "relative",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: 20 }}>{item.event}</h2>

              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginBottom: 10 }}>
                <div>Registered: {item.registered}</div>
                <div>Attended: {item.attended}</div>
              </div>

              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: "50%",
                    backgroundColor: getPopularityColor(item.popularity),
                  }}
                ></div>
                <span>{item.popularity} Popularity</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventStatisticsReport;
