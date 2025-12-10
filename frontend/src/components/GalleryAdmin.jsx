// GalleryAdmin.jsx
import React, { useState, useRef, useEffect } from 'react';
import bgVideo from '../assets/Bg.mp4';
import bannerImg from '../assets/slide2.jpg';
import { useNavigate } from "react-router-dom";

const GalleryAdmin = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const defaultPhotos = [
    { id: 1, src: 'https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/94b0176c-f227-4192-873d-4493da272904/Nita%27s%2B50th%2B-156.jpg', alt: 'Event 1' },
    { id: 2, src: 'https://www.vdainc.com/wp-content/uploads/2018/09/Emerson-College-Alumni-Weekend-2017_1100x688.jpg', alt: 'Event 2' },
    { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ofxFaReF9hG71tGOsoCmNd2TeFMMfOo7AA&s', alt: 'Event 3' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56HGWSsm91Yzbgl6-UF0gj7AocIZjPhdcBA&s', alt: 'Event 4' },
  ];

  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem('galleryPhotos');
    return saved ? JSON.parse(saved) : defaultPhotos;
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    localStorage.setItem('galleryPhotos', JSON.stringify(photos));
  }, [photos]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      const newPhoto = {
        id: Date.now(),
        src: reader.result,
        alt: "Uploaded Image",
      };
      setPhotos([...photos, newPhoto]);
      setSelectedFile(null);
      setPreview(null);
    };
  };

  const handleDelete = (id) => {
    setPhotos(photos.filter(p => p.id !== id));
  };

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
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 25px",
          background: "#007BFF",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          color: "white",
          marginBottom: "25px"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#007BFF")}
      >
        ⬅ Back
      </button>

      {/* Featured Banner */}
      <div style={{
        width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden',
        marginBottom: '50px', position: 'relative', boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
      }}>
        <img src={bannerImg} alt="Featured Event" style={{
          width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)'
        }} />

        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          color: 'white', textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'cursive', marginBottom: '10px' }}>
            Mega Tech Fest 2025
          </h2>
          <p style={{ fontSize: '1.2rem' }}>Oct 15, 2025 | Main Auditorium | Technical</p>
        </div>

        {/* Buttons */}
        <div style={{
          position: 'absolute',
          bottom: '35px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px'
        }}>
          
          {/* ⭐ UPDATED BUTTON — now correctly navigates to /events/1 */}
          <button
            onClick={() => navigate('/events/1')}
            style={{
              padding: "12px 28px",
              background: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#007BFF")}
          >
            View Details
          </button>

          <button
            onClick={() => navigate('/registration')}
            style={{
              padding: "12px 28px",
              background: "#00c557",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#009f47")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00c557")}
          >
            Register
          </button>
        </div>
      </div>

      <h1 style={{
        textAlign: 'center', fontSize: '3rem', fontWeight: '700', color: 'white',
        marginBottom: '40px', fontFamily: 'cursive'
      }}>
        Photo Gallery
      </h1>

      {/* Upload Section */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />

        <button
          onClick={() => fileInputRef.current.click()}
          style={{
            padding: "12px 25px",
            background: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            marginBottom: "15px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#007BFF")}
        >
          Upload Image
        </button>

        {preview && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "300px",
                borderRadius: "10px",
                marginBottom: "10px"
              }}
            />
            <br />
            <button
              onClick={handleUpload}
              style={{
                padding: "10px 20px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Upload to Gallery
            </button>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {photos.map(photo => (
          <div key={photo.id} style={{
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
            position: 'relative'
          }}>
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <button
              onClick={() => handleDelete(photo.id)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "6px 10px",
                background: "red",
                border: "none",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAdmin;
