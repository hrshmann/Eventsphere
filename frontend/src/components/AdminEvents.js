import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { events as sharedEvents, addEvent, deleteEvent, updateEvent } from "./eventsData";
import bgVideo from "../assets/Bg.mp4";
import sampleImg from "../assets/slide1.jpg";
import sampleImg2 from "../assets/slide2.jpg";
import sampleImg3 from "../assets/slide3.jpg";
import sampleImg4 from "../assets/slide2.jpg";

const imageOptions = [
  { name: "Slide 1", src: sampleImg },
  { name: "Slide 2", src: sampleImg2 },
  { name: "Slide 3", src: sampleImg3 },
  { name: "Slide 4", src: sampleImg4 },
];

const AdminEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([...sharedEvents]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    type: "",
    description: "",
    img: sampleImg,
  });
  const [editingId, setEditingId] = useState(null);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageChange = (e) => setNewEvent({ ...newEvent, img: e.target.value });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setNewEvent({ ...newEvent, img: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEvent = () => {
    if (editingId) {
      updateEvent({ id: editingId, ...newEvent });
      setEvents([...sharedEvents]);
      setEditingId(null);
    } else {
      addEvent(newEvent);
      setEvents([...sharedEvents]);
    }
    setNewEvent({
      name: "",
      date: "",
      location: "",
      type: "",
      description: "",
      img: sampleImg,
    });
  };

  const handleDelete = (id) => {
    deleteEvent(id);
    setEvents([...sharedEvents]);
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setNewEvent({ ...event });
    formRef.current.scrollIntoView({ behavior: "smooth" });
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

      {/* Dark overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: -1,
        }}
      />

      <div style={{ padding: "60px 50px", color: "white", fontFamily: "cursive", position: "relative", zIndex: 1 }}>

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ⬅ Back
        </button>
<h2 style={{ marginLeft: "30%", marginBottom: "20px", fontSize:"52px" }}>
  Manage Events
</h2>

        {/* Add/Edit Form */}
        <div
          ref={formRef}
          style={{
            margin: "30px 0",
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h4>{editingId ? "Edit Event" : "Add New Event"}</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleChange} />
            <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} />
            <input type="text" name="type" placeholder="Type" value={newEvent.type} onChange={handleChange} />
            <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} rows={3} />
            <label>Choose Image:</label>
            <select value={newEvent.img} onChange={handleImageChange}>
              {imageOptions.map((img, idx) => (
                <option key={idx} value={img.src}>{img.name}</option>
              ))}
            </select>
            <label>Or Upload Your Image:</label>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            <button
              onClick={handleSaveEvent}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#28a745",
                cursor: "pointer",
              }}
            >
              {editingId ? "Update Event" : "Add Event"}
            </button>
          </div>
        </div>

        {/* Event Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {events.map((ev, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  flexDirection: isEven ? "row" : "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                  gap: "20px",
                  position: "relative",
                }}
              >
                {/* Event Details */}
                <div style={{ flex: 1, color: "white", padding: "0 20px" }}>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{ev.name}</h3>
                  <p><strong>Date:</strong> {ev.date}</p>
                  <p><strong>Location:</strong> {ev.location}</p>
                  <p><strong>Type:</strong> {ev.type}</p>
                  <p>{ev.description}</p>
                </div>

                {/* Edit/Delete Buttons Centered */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                  <button
                    onClick={() => handleEdit(ev)}
                    style={{ padding: "5px 10px", borderRadius: "5px", border: "none", backgroundColor: "#ffc107", cursor: "pointer" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ev.id)}
                    style={{ padding: "5px 10px", borderRadius: "5px", border: "none", backgroundColor: "red", cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </div>

                {/* Event Image */}
                {ev.img && (
                  <img
                    src={ev.img}
                    alt={ev.name}
                    style={{ width: "250px", height: "150px", borderRadius: "15px", objectFit: "cover" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
