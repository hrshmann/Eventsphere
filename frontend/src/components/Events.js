// src/components/Events.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";
import { events as sharedEvents } from "./eventsData";

const Events = () => {
  const navigate = useNavigate(); 
  const [filterType, setFilterType] = useState("All");

  // Filter events based on category
  const filteredEvents = sharedEvents.filter(
    (event) => filterType === "All" || event.type === filterType
  );

  const categories = ["All", "Technical", "Cultural", "Sports", "Art", "Workshop", "Onstage"];

  const handleRegister = (event) => {
    navigate(
      `/registration?eventId=${event.id}&eventTitle=${encodeURIComponent(
        event.name
      )}&eventType=${encodeURIComponent(event.type)}`
    );
  };

  if (sharedEvents.length === 0) {
    return <div style={{ padding: "120px", color: "white" }}>No events available.</div>;
  }

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
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          padding: "50px 5%",
          position: "relative",
          zIndex: 1,
          fontFamily: "cursive",
          color: "white",
        }}
      >
        {/* Featured Event */}
        <div
          style={{
            position: "relative",
            marginBottom: "50px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={sharedEvents[0].img}
            alt={sharedEvents[0].name}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              }}
            >
              {sharedEvents[0].name}
            </h2>
            <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              {sharedEvents[0].date} | {sharedEvents[0].location} |{" "}
              {sharedEvents[0].type}
            </p>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Link to={`/events/${sharedEvents[0].id}`}>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>
              <button
                onClick={() => handleRegister(sharedEvents[0])}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#28a745",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "30px" }}>
          Upcoming Events
        </h2>

        {/* Categories */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                padding: "10px 20px",
                borderRadius: "50px",
                background: filterType === cat ? "#007BFF" : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "0.3s",
                color: "white",
              }}
              onClick={() => setFilterType(cat)}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.4)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  filterType === cat ? "#007BFF" : "rgba(255,255,255,0.2)")
              }
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Event Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "50px", alignItems: "center" }}>
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              style={{
                display: "flex",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50px",
                padding: "40px 60px",
                width: "95%",
                minHeight: "250px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                gap: "60px",
              }}
            >
              <img
                src={event.img}
                alt={event.name}
                style={{ width: "300px", height: "220px", borderRadius: "50px", objectFit: "cover" }}
              />
              <div
                style={{
                  flex: 1,
                  padding: "0 40px",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: idx % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{event.name}</h3>
                <p style={{ marginBottom: "10px" }}><strong>Date:</strong> {event.date}</p>
                <p style={{ marginBottom: "10px" }}><strong>Location:</strong> {event.location}</p>
                <p style={{ marginBottom: "10px" }}><strong>Type:</strong> {event.type}</p>
                <p style={{ marginBottom: "10px" }}>{event.description}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
                  <Link to={`/events/${event.id}`}>
                    <button
                      style={{
                        padding: "10px 25px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#007BFF",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => handleRegister(event)}
                    style={{
                      padding: "10px 25px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#28a745",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
