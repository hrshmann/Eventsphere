// src/components/ResourceInventoryReport.js
import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const ResourceInventoryReport = () => {
  const navigate = useNavigate();

  // Events with resources, buses, and duration
  const eventsResources = [
    {
      name: "Tech Fest",
      duration: "10:00 AM - 5:00 PM",
      buses: ["Route 101", "Route 102"],
      resources: [
        { name: "PCs", needed: 40, available: 150 },
        { name: "Labs", needed: 3, available: 5 },
        { name: "Projector", needed: 5, available: 20 },
      ],
    },
    {
      name: "Cultural Night",
      duration: "6:00 PM - 10:00 PM",
      buses: ["Route 103", "Route 104", "Route 105"],
      resources: [
        { name: "Chairs", needed: 100, available: 120 },
        { name: "Lights", needed: 15, available: 250 },
        { name: "Auditorium", needed: 1, available: 1 },
        { name: "Refreshments", needed: 200, available: 250 },
      ],
    },
    {
      name: "Sports Meet",
      duration: "8:00 AM - 3:00 PM",
      buses: ["Route 106", "Route 107"],
      resources: [
        { name: "Balls", needed: 20, available: 30 },
        { name: "Cones", needed: 15, available: 20 },
        { name: "Water Bottles", needed: 100, available: 150 },
        { name: "Medals", needed: 50, available: 60 },
      ],
    },
    {
      name: "Art Workshop",
      duration: "2:00 PM - 5:00 PM",
      buses: ["Route 108"],
      resources: [
        { name: "Paper", needed: 50, available: 100 },
        { name: "Pens", needed: 30, available: 40 },
        { name: "Colors", needed: 20, available: 25 },
        { name: "Easels", needed: 10, available: 12 },
      ],
    },
  ];

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
          Resource & Inventory Report
        </h1>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {eventsResources.map((event, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255,255,255,0.95)",
                color: "black",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: 10 }}>{event.name}</h2>
              <p style={{ textAlign: "center", marginBottom: 10 }}>
                <strong>Duration:</strong> {event.duration}
              </p>
              <p style={{ textAlign: "center", marginBottom: 20 }}>
                <strong>Buses:</strong> {event.buses.join(", ")}
              </p>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#333", color: "white" }}>
                    <th style={{ textAlign: "left", padding: 8 }}>Resource</th>
                    <th style={{ textAlign: "left", padding: 8 }}>Needed</th>
                    <th style={{ textAlign: "left", padding: 8 }}>Available</th>
                  </tr>
                </thead>
                <tbody>
                  {event.resources.map((res, rIdx) => (
                    <tr key={rIdx} style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
                      <td style={{ padding: 8 }}>{res.name}</td>
                      <td style={{ padding: 8 }}>{res.needed}</td>
                      <td style={{ padding: 8 }}>{res.available}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceInventoryReport;
