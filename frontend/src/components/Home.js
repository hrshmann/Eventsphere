import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import techFestImg from '../assets/slide1.jpg';
import culturalNightImg from '../assets/slide2.jpg';
import sportsMeetImg from '../assets/slide1.jpg';
import bgVideo from '../assets/Bg.mp4';

// Example gallery images
import gallery1 from '../assets/hero.jpg';
import gallery2 from '../assets/slide2.jpg';
import gallery3 from '../assets/slide3.jpg';
import gallery4 from '../assets/slide1.jpg';

const Home = ({ showAlert }) => {
  const navigate = useNavigate();

  const upcomingEvents = [
    { 
      id: 1,
      title: 'Tech Fest 2025', 
      date: 'Oct 15, 2025', 
      time: '10:00 AM', 
      location: 'Main Auditorium', 
      type: 'Technical', 
      img: techFestImg 
    },
    { 
      id: 2,
      title: 'Cultural Night', 
      date: 'Nov 5, 2025', 
      time: '6:00 PM', 
      location: 'Open Ground', 
      type: 'Cultural', 
      img: culturalNightImg 
    },
    { 
      id: 3,
      title: 'Sports Meet', 
      date: 'Dec 1, 2025', 
      time: '8:00 AM', 
      location: 'Sports Complex', 
      type: 'Sports', 
      img: sportsMeetImg 
    },
  ];

  const words = ['Unite', 'Inspire', 'Shine'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['Cultural', 'Tech', 'Sports', 'Art', 'Workshop', 'On-Stage'];
  const galleryPreview = [gallery1, gallery2, gallery3, gallery4];

  // Navigate to events page when a category is clicked
  const handleCategoryClick = (category) => {
    navigate('/events'); // simply navigate to events page
  };

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      
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

      {/* Dark Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <div style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5%',
        color: 'white',
      }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'cursive', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Welcome To EventSphere
        </h1>
        <p style={{ fontSize: '1.3rem', marginTop: '10px', fontFamily: 'cursive', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          of CT Group Of Institutions<br />Your Gateway to extraordinary experiences
        </p>

        {/* Animated Words */}
        <div style={{ marginTop: '20px', height: '50px', overflow: 'hidden', position: 'relative' }}>
          <span
            key={currentWordIndex}
            style={{
              display: 'block',
              fontSize: '2rem',
              fontFamily: 'cursive',
              fontWeight: '700',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              transform: 'translateY(0)',
              transition: 'all 0.5s ease-in-out',
            }}
          >
            {words[currentWordIndex]}
          </span>
        </div>
      </div>

      {/* Upcoming Events */}
      <section style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
        <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <h2 style={{ color: '#f8fafaff', textAlign: 'center', fontSize: '3rem', fontFamily: 'cursive', fontWeight: '700', textShadow: '2px 2px 6px rgba(0,0,0,0.3)' }}>
            Upcoming Events
          </h2>

          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#51beb58c',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                color: 'white'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(124, 123, 123, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              <div style={{ textAlign: 'center', flex: '1' }}>
                <img
                  src={event.img}
                  alt={event.title}
                  style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', marginBottom: '10px' }}
                />
                <h3>{event.title}</h3>
              </div>

              <div style={{ textAlign: 'center', flex: '2' }}>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Type:</strong> {event.type}</p>
              </div>

              {/* Buttons Section */}
              <div style={{ flex: '1', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                {/* Register Button */}
                <button
                  onClick={handleRegisterClick}
                  style={{ padding: '12px 25px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Register
                </button>

                {/* View Details Button */}
                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  style={{ padding: '12px 25px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                >
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '50px 0', width: '90%', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontFamily: 'cursive',
          fontWeight: '700',
          marginBottom: '40px',
          color: 'white',
        }}>Gallery Preview</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {galleryPreview.map((img, idx) => (
            <div
              key={idx}
              onClick={handleGalleryClick}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
              }}
            >
              <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '50px 0', width: '90%', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontFamily: 'cursive',
          fontWeight: '700',
          marginBottom: '40px',
          color: 'white',
        }}>Event Categories</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 120px)',
          gap: '0',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat)} // now navigates to /events
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                fontSize: '1.2rem',
                fontWeight: '700',
                fontFamily: 'cursive',
                textAlign: 'center',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '10px',
                padding: '10px',
                color: 'white',
              }}
            >
              {cat}

              {(idx % 3 !== 2) && <div style={{
                position: 'absolute',
                right: 0,
                top: '15%',
                height: '70%',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, #fdf7f7ff, transparent)'
              }}></div>}

              {idx < 3 && <div style={{
                position: 'absolute',
                bottom: 0,
                left: '10%',
                width: '80%',
                height: '2px',
                background: 'linear-gradient(to right, transparent, #fdfdfdff, transparent)'
              }}></div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
