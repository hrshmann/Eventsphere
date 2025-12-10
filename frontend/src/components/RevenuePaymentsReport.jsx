// src/components/RevenuePaymentsReport.js
import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const RevenuePaymentsReport = () => {
  const navigate = useNavigate();

  // Sample data per event
  const events = [
    { 
      name: "Tech Talk", 
      revenue: 15000, 
      collegeCost: 5000 
    },
    { 
      name: "Workshop", 
      revenue: 12000, 
      collegeCost: 7000 
    },
    { 
      name: "Seminar", 
      revenue: 18000, 
      collegeCost: 9000 
    },
    { 
      name: "Conference", 
      revenue: 23000, 
      collegeCost: 12000 
    },
    { 
      name: "Cultural Night", 
      revenue: 20000, 
      collegeCost: 10000 
    },
    { 
      name: "Art Workshop", 
      revenue: 8000, 
      collegeCost: 4000 
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
          Revenue & Profit Report
        </h1>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {events.map((event, idx) => {
            const profit = event.revenue - event.collegeCost;
            return (
              <div
                key={idx}
                style={{
                  position: "relative",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  color: "black",
                  borderRadius: 12,
                  padding: 20,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              >
                <h2 style={{ textAlign: "center", marginBottom: 20 }}>{event.name}</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, fontWeight: "bold" }}>
                  <div>Revenue Generated: ₹{event.revenue.toLocaleString()}</div>
                  <div>College Costs: ₹{event.collegeCost.toLocaleString()}</div>
                  <div>Profit: ₹{profit.toLocaleString()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenuePaymentsReport;
