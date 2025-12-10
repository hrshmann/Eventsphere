// src/components/Registration.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";
import regVideo from "../assets/register now.mp4";

const eventData = [
  { id: 1, name: "Tech Fest 2025", type: "Technical" },
  { id: 2, name: "Cultural Night", type: "Cultural" },
];

const Registration = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = parseInt(queryParams.get("event"));

  const [registrationType, setRegistrationType] = useState("single");
  const [teamMembers, setTeamMembers] = useState([{ name: "", email: "" }]);
  const [formData, setFormData] = useState({
    teamName: "",
    eventTitle: "",
    eventType: "",
  });

  const eventTypes = ["Technical", "Cultural", "Sports", "Art Workshop", "Onstage"];

  useEffect(() => {
    const selectedEvent = eventData.find((e) => e.id === eventId);
    if (selectedEvent) {
      setFormData((prev) => ({
        ...prev,
        eventTitle: selectedEvent.name,
        eventType: selectedEvent.type,
      }));
    }
  }, [eventId]);

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", email: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", { registrationType, formData, teamMembers });
    alert("Registration Submitted! (Payment Gateway to be integrated)");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "50px 20px" }}>
      <video
        autoPlay
        loop
        muted
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: -1 }} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ flex: "1 1 400px", minHeight: "500px" }}>
          <video
            autoPlay
            loop
            muted
            draggable={false}
            style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
          >
            <source src={regVideo} type="video/mp4" />
          </video>
        </div>

        <div style={{ flex: "1 1 500px", padding: "40px", color: "white" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px", fontFamily: "cursive" }}>Event Registration</h2>

          <form onSubmit={handleSubmit}>
            <label>Registration Type:</label>
            <select
              value={registrationType}
              onChange={(e) => setRegistrationType(e.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none" }}
            >
              <option value="single">Single</option>
              <option value="team">Team</option>
            </select>

            {registrationType === "team" && (
              <>
                <label>Team Name:</label>
                <input
                  type="text"
                  placeholder="Enter team name"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  required
                  style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none" }}
                />

                <h4>Team Members:</h4>
                {teamMembers.map((member, index) => (
                  <div key={index} style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
                    <input
                      type="text"
                      placeholder={`Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, "name", e.target.value)}
                      style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "none" }}
                    />
                    <input
                      type="email"
                      placeholder={`Member ${index + 1} Email`}
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, "email", e.target.value)}
                      style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "none" }}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTeamMember}
                  style={{ marginBottom: "15px", padding: "8px 15px", borderRadius: "5px", border: "none", cursor: "pointer", backgroundColor: "#28a745", color: "white" }}
                >
                  + Add Member
                </button>
              </>
            )}

            {/* Editable Event Title */}
            <label>Event Title:</label>
            <input
              type="text"
              placeholder="Enter event title"
              value={formData.eventTitle}
              onChange={(e) => setFormData({ ...formData, eventTitle: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "rgba(255, 255, 255, 1)",
                color: "black", // <-- text appears black
              }}
            />

            <label>Event Type:</label>
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none", backgroundColor: "rgba(255,255,255,1)", color: "black" }}
            >
              {eventTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>

            <h3>Payment</h3>
            <p>Integrate Razorpay / Stripe / UPI here</p>

            <button
              type="submit"
              style={{ background: "#007bff", color: "#fff", padding: "12px", border: "none", borderRadius: "8px", width: "100%", marginTop: "10px", cursor: "pointer" }}
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
