// src/components/EventDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bgVideo from '../assets/Bg.mp4';
import eventBanner from '../assets/slide1.jpg';

// EVENTS DATA
const eventData = [
  {
    id: 1,
    name: 'Tech Fest 2025',
    type: 'Technical',
    location: 'Main Auditorium',
    date: 'Oct 15, 2025',
    venue: 'College Campus',
    description: 'A grand tech festival featuring coding contests, tech exhibitions, hackathons and guest tech talks.',
    rules: 'Teams of max 4, follow event schedule strictly, no plagiarism.',
    organizers: 'John Doe - john@example.com',
    prizes: 'Cash prizes for top 3 teams.',
    registrationDeadline: 'Oct 10, 2025',
    seatsLeft: 50,
    img: eventBanner
  },

  {
    id: 2,
    name: 'Cultural Night',
    type: 'Cultural',
    location: 'Open Ground',
    date: 'Nov 5, 2025',
    venue: 'College Campus',
    description: 'A beautiful evening filled with dance, singing, dramatics, band performances and cultural displays.',
    rules: 'Participants must register beforehand, maintain decorum.',
    organizers: 'Jane Smith - jane@example.com',
    prizes: 'Certificates + awards for top winners.',
    registrationDeadline: 'Nov 1, 2025',
    seatsLeft: 100,
    img: eventBanner
  },

  // ⭐ NEW — SPORTS MEET EVENT
  {
    id: 3,
    name: 'Sports Meet 2025',
    type: 'Sports',
    location: 'Sports Complex',
    date: 'Dec 1, 2025',
    venue: 'CT Campus Sports Ground',
    description:
      'Annual Sports Meet with athletics, football, basketball, volleyball, kabaddi and more. Open for all students.',
    rules: 'Selected participants must carry ID card, report 30 minutes early, team coordination is mandatory.',
    organizers: 'Coach Raj - raj.sports@example.com',
    prizes: 'Trophies, medals and certificates for winners.',
    registrationDeadline: 'Nov 25, 2025',
    seatsLeft: 120,
    img: eventBanner
  },

  // ⭐ NEW — ART WORKSHOP EVENT
  {
    id: 4,
    name: 'Art & Creativity Workshop',
    type: 'Workshop',
    location: 'Fine Arts Hall',
    date: 'Oct 28, 2025',
    venue: 'Arts Block - Room 204',
    description:
      'A hands-on creative workshop focused on painting, sketching, clay modeling, and modern art techniques.',
    rules: 'All materials will be provided. Participants must maintain cleanliness.',
    organizers: 'Meera Arts - meera.art@example.com',
    prizes: 'Best artwork award + certificates.',
    registrationDeadline: 'Oct 25, 2025',
    seatsLeft: 30,
    img: eventBanner
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData.find(e => e.id === parseInt(id));

  if (!event)
    return (
      <p style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
        Event not found!
      </p>
    );

  const currentURL = window.location.href;

  const handleRegister = () => {
    navigate(
      `/registration?eventId=${event.id}&eventTitle=${encodeURIComponent(
        event.name
      )}&eventType=${encodeURIComponent(event.type)}`
    );
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: -1,
        }}
      />

      <div
        style={{
          padding: '50px 5%',
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: '20px',
            padding: '8px 15px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          ← Back
        </button>

        {/* EVENT CARD */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '50px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ flex: '1 1 400px', padding: '30px', color: 'white' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontFamily: 'cursive' }}>
              {event.name}
            </h1>

            <p>
              <strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location} |{' '}
              <strong>Type:</strong> {event.type}
            </p>

            <p style={{ margin: '15px 0' }}>{event.description}</p>

            <p>
              <strong>Rules:</strong> {event.rules}
            </p>
            <p>
              <strong>Organizers:</strong> {event.organizers}
            </p>
            <p>
              <strong>Prizes:</strong> {event.prizes}
            </p>
            <p>
              <strong>Registration Deadline:</strong> {event.registrationDeadline}
            </p>
            <p>
              <strong>Seats Left:</strong> {event.seatsLeft}
            </p>

            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <button
                onClick={handleRegister}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Register Now
              </button>

            </div>
          </div>

          <div style={{ flex: '1 1 400px', minHeight: '300px' }}>
            <img
              src={event.img}
              alt={event.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* SHARE BUTTONS */}
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <a
            href={`https://api.whatsapp.com/send?text=Check out this event: ${currentURL}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 15px',
              background: 'linear-gradient(45deg, #25D366, #128C7E, #075E54)',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            WhatsApp
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 15px',
              background: 'linear-gradient(45deg, #0076b5ff, #0a66c2, #012549ff)',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 15px',
              background:
                'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)',
              color: '#fff',
              borderRadius: '5px',
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
