// GalleryUser.jsx
import React, { useState } from 'react';
import bgVideo from '../assets/Bg.mp4';
import bannerImg from '../assets/slide2.jpg';
import { useNavigate, Link } from "react-router-dom";

const GalleryUser = () => {
  const navigate = useNavigate();

  const defaultPhotos = [
    { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/94b0176c-f227-4192-873d-4493da272904/Nita%27s%2B50th%2B-156.jpg', alt: 'Event 1' },
    { id: 2, src: 'https://www.vdainc.com/wp-content/uploads/2018/09/Emerson-College-Alumni-Weekend-2017_1100x688.jpg', alt: 'Event 2' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ofxFaReF9hG71tGOsoCmNd2TeFMMfOo7AA&s', alt: 'Event 3' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56HGWSsm91Yzbgl6-UF0gj7AocIZjPhdcBA&s', alt: 'Event 4' },
  ];

  const [photos] = useState(() => {
    const saved = localStorage.getItem('galleryPhotos');
    return saved ? JSON.parse(saved) : defaultPhotos;
  });

  const featuredEventId = 1;

  return (
    <div style={{ position: 'relative', width: '100%', padding: '50px 5%' }}>
      {/* Background Video */}
      <video autoPlay loop muted style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        objectFit: 'cover', zIndex: -2
      }}>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)', zIndex: -1
      }} />

      {/* Back Button */}
      <button onClick={() => navigate(-1)} style={{
        padding: "10px 25px", background: "#007bff", border: "none",
        borderRadius: "10px", fontWeight: "bold", cursor: "pointer",
        color: "white", marginBottom: "25px"
      }}>⬅ Back</button>

      {/* Featured Banner */}
      <div style={{
        width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden',
        marginBottom: '50px', position: 'relative', boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
      }}>
        <img src={bannerImg} alt="Featured Event" style={{
          width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)'
        }} />

        <div style={{
          position: 'absolute', bottom: '100px', left: '50%',
          transform: 'translateX(-50%)', color: 'white', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'cursive' }}>Mega Tech Fest 2025</h2>
          <p style={{ fontSize: '1.2rem' }}>Oct 15, 2025 • Main Auditorium • Technical Event</p>
        </div>

        <div style={{
          position: 'absolute', bottom: '30px', left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: '20px'
        }}>
          <Link to={`/events/${featuredEventId}`}>
            <button style={{
              padding: "12px 25px", borderRadius: "10px",
              background: "#007bff", color: "white", border: "none",
              fontWeight: "bold", cursor: "pointer", fontSize: "1rem"
            }}>View Details</button>
          </Link>

          <button onClick={() => navigate("/registration")} style={{
            padding: "12px 25px", borderRadius: "10px",
            background: "#28a745", color: "white", border: "none",
            fontWeight: "bold", cursor: "pointer", fontSize: "1rem"
          }}>Register</button>
        </div>
      </div>

      <h1 style={{
        textAlign: 'center', fontSize: '3rem', fontWeight: '700',
        color: 'white', marginBottom: '40px', fontFamily: 'cursive'
      }}>Photo Gallery</h1>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px', maxWidth: '1200px', margin: '0 auto'
      }}>
        {photos.map(photo => (
          <div key={photo.id} style={{
            borderRadius: '15px', overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.45)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={photo.src} alt={photo.alt} style={{
              width: '100%', height: '200px', objectFit: 'cover'
            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryUser;
