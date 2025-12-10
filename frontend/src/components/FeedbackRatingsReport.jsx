// src/components/FeedbackRatingsReport.js
import React from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/Bg.mp4";

const FeedbackRatingsReport = () => {
  const navigate = useNavigate();

  // Feedbacks grouped by event (5-10 reviews per event)
  const eventsFeedbacks = [
    {
      name: "Tech Talk",
      feedbacks: [
        { participant: "Alice", rating: 5, comment: "Excellent session!" },
        { participant: "Ethan", rating: 4, comment: "Very insightful." },
        { participant: "Jack", rating: 5, comment: "Loved the technical depth." },
        { participant: "Liam", rating: 4, comment: "Good explanation of concepts." },
        { participant: "Sophia", rating: 5, comment: "Highly recommended!" },
        { participant: "Mia", rating: 4, comment: "Great examples and demo." },
        { participant: "Noah", rating: 3, comment: "Content was okay." },
      ],
    },
    {
      name: "Workshop",
      feedbacks: [
        { participant: "Bob", rating: 4, comment: "Very informative." },
        { participant: "Fiona", rating: 5, comment: "Loved the hands-on approach." },
        { participant: "Olivia", rating: 4, comment: "Good pace and structure." },
        { participant: "William", rating: 5, comment: "Interactive and practical." },
        { participant: "Emma", rating: 3, comment: "Expected more examples." },
        { participant: "Lucas", rating: 4, comment: "Well organized." },
      ],
    },
    {
      name: "Seminar",
      feedbacks: [
        { participant: "Charlie", rating: 3, comment: "Average content." },
        { participant: "George", rating: 4, comment: "Good overall." },
        { participant: "Ava", rating: 4, comment: "Informative and clear." },
        { participant: "Isabella", rating: 5, comment: "Excellent presentation." },
        { participant: "James", rating: 4, comment: "Well structured seminar." },
        { participant: "Henry", rating: 3, comment: "Too long but okay." },
      ],
    },
    {
      name: "Conference",
      feedbacks: [
        { participant: "Diana", rating: 5, comment: "Loved it!" },
        { participant: "Hannah", rating: 4, comment: "Well organized." },
        { participant: "Benjamin", rating: 5, comment: "Amazing speakers." },
        { participant: "Charlotte", rating: 4, comment: "Very engaging sessions." },
        { participant: "Daniel", rating: 4, comment: "Good networking opportunities." },
        { participant: "Ella", rating: 5, comment: "High quality content." },
        { participant: "Logan", rating: 3, comment: "Could be shorter." },
        { participant: "Grace", rating: 4, comment: "Great overall experience." },
      ],
    },
  ];

  // Function to calculate average rating
  const getAverageRating = (feedbacks) => {
    if (!feedbacks.length) return 0;
    const total = feedbacks.reduce((sum, f) => sum + f.rating, 0);
    return (total / feedbacks.length).toFixed(1);
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
          Feedback & Ratings Report
        </h1>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {eventsFeedbacks.map((event, idx) => {
            const avgRating = getAverageRating(event.feedbacks);

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
                {/* Average Rating Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "#FFD700",
                    padding: "6px 10px",
                    borderRadius: 12,
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                  title="Average Rating"
                >
                  ⭐ {avgRating}/5
                </div>

                <h2 style={{ textAlign: "center", marginBottom: 16 }}>{event.name}</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#333", color: "white" }}>
                      <th style={{ textAlign: "left", padding: 8 }}>Participant</th>
                      <th style={{ textAlign: "left", padding: 8 }}>Rating</th>
                      <th style={{ textAlign: "left", padding: 8 }}>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.feedbacks.map((fb, fIdx) => (
                      <tr key={fIdx} style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}>
                        <td style={{ padding: 8 }}>{fb.participant}</td>
                        <td style={{ padding: 8 }}>{fb.rating}</td>
                        <td style={{ padding: 8 }}>{fb.comment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedbackRatingsReport;
