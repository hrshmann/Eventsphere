// src/components/AdminRegistrations.js
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const INITIAL_REGISTRATIONS = [
  { name: "Amit Sharma", email: "amit@example.com", event: "Tech Fest", category: "Technical" },
  { name: "Rohit Verma", email: "rohit@example.com", event: "Cultural Night", category: "Cultural" },
  { name: "Simran Kaur", email: "simran@example.com", event: "Sports Meet", category: "Sports" },
  { name: "Harpreet Singh", email: "harpreet@example.com", event: "Tech Fest", category: "Technical" },
];

const categories = ["All", "Technical", "Cultural", "Sports", "Art Workshop", "On-Stage"];

const AdminRegistrations = () => {
  const navigate = useNavigate();

  const [registrations, setRegistrations] = useState([...INITIAL_REGISTRATIONS]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toDeleteIndex, setToDeleteIndex] = useState(null);

  const [newParticipant, setNewParticipant] = useState({
    name: "",
    email: "",
    event: "",
    category: "Technical",
  });

  const filteredRegistrations =
    selectedCategory === "All"
      ? registrations
      : registrations.filter((reg) => reg.category === selectedCategory);

  // Compute event-wise counts dynamically
  const eventCounts = useMemo(() => {
    return registrations.reduce((acc, reg) => {
      const evt = reg.event.trim();
      acc[evt] = (acc[evt] || 0) + 1;
      return acc;
    }, {});
  }, [registrations]);

  const totalRegistrations = registrations.length;

  // Open add modal
  const openAddModal = () => {
    setNewParticipant({ name: "", email: "", event: "", category: "Technical" });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => setIsAddModalOpen(false);

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((p) => ({ ...p, [name]: value }));
  };

  // Handle adding participant
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const name = newParticipant.name.trim();
    const email = newParticipant.email.trim();
    const event = newParticipant.event.trim();
    const category = newParticipant.category;

    if (!name || !email || !event) {
      alert("Please fill name, email and event.");
      return;
    }

    // Normalize event name
    const normalizedEvent = event.charAt(0).toUpperCase() + event.slice(1);

    setRegistrations((prev) => [
      ...prev,
      { name, email, event: normalizedEvent, category },
    ]);

    setIsAddModalOpen(false);
  };

  const confirmDelete = (index) => {
    setToDeleteIndex(index);
    setIsDeleteModalOpen(true);
  };

  const cancelDelete = () => {
    setToDeleteIndex(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirmed = () => {
    if (toDeleteIndex == null) return;
    setRegistrations((prev) => prev.filter((_, idx) => idx !== toDeleteIndex));
    setToDeleteIndex(null);
    setIsDeleteModalOpen(false);
  };

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
          backgroundColor: "rgba(0,0,0,0.75)",
          zIndex: -1,
        }}
      ></div>

      {/* Back + Add Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", padding: 20 }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 18px",
            background: "#007bff",
            color: "black",
            fontWeight: "bold",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <button
          onClick={openAddModal}
          style={{
            padding: "10px 18px",
            background: "#28a745",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          + Add Participant
        </button>
      </div>

      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "2.6rem",
          marginTop: 10,
          fontFamily: "cursive",
          textShadow: "2px 2px 6px black",
        }}
      >
        Registrations Overview
      </h1>

      {/* Total & Event-wise Counts */}
      <div
        style={{
          width: "90%",
          maxWidth: 1000,
          margin: "18px auto",
          padding: "12px 16px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0", textAlign: "center" }}>
          Total Registrations: {totalRegistrations}
        </h3>
        <h4 style={{ margin: "8px 0", textAlign: "center" }}>Event-wise Registration Count</h4>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {Object.keys(eventCounts).length === 0 ? (
            <div style={{ padding: 8 }}>No registrations yet.</div>
          ) : (
            Object.entries(eventCounts).map(([ev, count]) => (
              <div
                key={ev}
                style={{
                  background: "#f1f1f1",
                  padding: "8px 12px",
                  borderRadius: 999,
                  fontWeight: "600",
                }}
              >
                {ev}: {count}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Category Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: 12, flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 16px",
              background: selectedCategory === cat ? "#00aaff" : "#0077cc",
              color: "white",
              border: "none",
              borderRadius: 25,
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#005799")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = selectedCategory === cat ? "#00aaff" : "#0077cc")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Registrations Table */}
      <div style={{ marginTop: 28, display: "flex", justifyContent: "center", width: "100%" }}>
        <table
          style={{
            width: "90%",
            maxWidth: 1100,
            background: "rgba(255,255,255,0.95)",
            borderRadius: 12,
            padding: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#333", color: "white" }}>
              <th style={{ padding: 12, textAlign: "left" }}>Name</th>
              <th style={{ padding: 12, textAlign: "left" }}>Email</th>
              <th style={{ padding: 12, textAlign: "left" }}>Event</th>
              <th style={{ padding: 12, textAlign: "left" }}>Category</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRegistrations.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: 20 }}>
                  No registrations found.
                </td>
              </tr>
            ) : (
              filteredRegistrations.map((reg) => {
                const realIndex = registrations.indexOf(reg);
                return (
                  <tr key={realIndex} style={{ borderBottom: "1px solid #e6e6e6" }}>
                    <td style={{ padding: 12 }}>{reg.name}</td>
                    <td style={{ padding: 12 }}>{reg.email}</td>
                    <td style={{ padding: 12 }}>{reg.event}</td>
                    <td style={{ padding: 12 }}>{reg.category}</td>
                    <td style={{ padding: 12, textAlign: "center" }}>
                      <button
                        onClick={() => confirmDelete(realIndex)}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 8,
                          border: "none",
                          background: "red",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ width: 420, background: "white", borderRadius: 12, padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>Add Participant</h3>
            <form onSubmit={handleAddSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  name="name"
                  placeholder="Full name"
                  value={newParticipant.name}
                  onChange={handleAddChange}
                  style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  required
                />
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={newParticipant.email}
                  onChange={handleAddChange}
                  style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  required
                />
                <input
                  name="event"
                  placeholder="Event name (e.g. Tech Fest)"
                  value={newParticipant.event}
                  onChange={handleAddChange}
                  style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                  required
                />
                <select
                  name="category"
                  value={newParticipant.category}
                  onChange={handleAddChange}
                  style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
                >
                  <option>Technical</option>
                  <option>Cultural</option>
                  <option>Sports</option>
                  <option>Art Workshop</option>
                  <option>On-Stage</option>
                </select>

                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 8 }}>
                  <button type="button" onClick={closeAddModal} style={{ padding: "8px 12px", borderRadius: 8 }}>
                    Cancel
                  </button>
                  <button type="submit" style={{ padding: "8px 12px", background: "#28a745", color: "white", borderRadius: 8 }}>
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ width: 420, background: "white", borderRadius: 12, padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>Confirm Remove</h3>
            <p>Are you sure you want to remove this participant?</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 12 }}>
              <button onClick={cancelDelete} style={{ padding: "8px 12px", borderRadius: 8 }}>
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirmed}
                style={{ padding: "8px 12px", background: "red", color: "white", borderRadius: 8 }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRegistrations;
