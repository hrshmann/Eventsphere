import React from 'react';
import aboutImg from '../assets/slide1.jpg';
import bgVideo from '../assets/Bg.mp4';
import devImg from '../assets/formal photo.png';
import coDevImg from '../assets/images.jpeg';
import leadImg from '../assets/slide3.jpg';

const About = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      
      {/* Full-page Video Background */}
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

      {/* Main Content */}
      <div style={{ padding: '50px 5%', fontFamily: 'cursive', position: 'relative', zIndex: 1 }}>
        
        {/* Top Center Title */}
        <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
          About Us
        </h1>

        {/* Short description */}
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '50px', color: 'white' }}>
          EventSphere is dedicated to bringing global learning experiences to students through innovation, events, and knowledge sharing.
        </p>

        {/* Two Huge Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginBottom: '50px' }}>
          
          {/* Left Card */}
          <div style={{
            flex: '1 1 400px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#ffd700' }}>
              Redefining Excellence in Event Management Through Innovation and Technology
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6',marginTop: '80px' }}>
               EventSphere is committed to bridging gaps in learning and knowledge by organizing events, workshops, and projects that inspire innovation and creativity. 
  Our focus is on creating a platform where students can learn, collaborate, and grow to achieve their fullest potential. 
  We aim to foster leadership skills, teamwork, and critical thinking through hands-on experiences. 
 

            </p>
          </div>

          {/* Right Card */}
          <div style={{
            flex: '1 1 400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Main Image */}
            <div style={{
              width: '100%',
              height: '250px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
            }}>
              <img src={aboutImg} alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Four Small Cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              
              <div style={{
                flex: '1 1 150px',
                background: '#007BFF',
                color: 'white',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <h3>50+</h3>
                <p>Events Done</p>
              </div>

              <div style={{
                flex: '1 1 150px',
                background: '#28a745',
                color: 'white',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <h3>30+</h3>
                <p>Projects</p>
              </div>

              <div style={{
                flex: '1 1 150px',
                background: '#ffc107',
                color: 'white',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <h3>400+</h3>
                <p>Reviews</p>
              </div>

              <div style={{
                flex: '1 1 150px',
                background: '#dc3545',
                color: 'white',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}>
                <h3>1000+</h3>
                <p>Students Involved</p>
              </div>

            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '40px' }}>
            Our Team
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px' }}>
            
            {/* Developer */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
              }}>
                <img src={devImg} alt="Developer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'white', marginTop: '15px' }}>Developer</h3>
            </div>

            {/* Co-Developer */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
              }}>
                <img src={coDevImg} alt="Co-Developer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'white', marginTop: '15px' }}>Event Manager</h3>
            </div>

            {/* Project Lead */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto',
                boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
              }}>
                <img src={leadImg} alt="Project Lead" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'white', marginTop: '15px' }}>Project Lead</h3>
            </div>

          </div>
        </div>

        {/* Mission & Vision Section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '50px',
          marginTop: '80px',
          marginBottom: '50px'
        }}>
          
          {/* Our Vision */}
          <div style={{
            flex: '1 1 300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            padding: '40px 30px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#ffd700' }}>Our Vision</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              To become a global platform that transforms learning experiences through events, collaboration, and innovation.
            </p>
          </div>

          {/* Our Mission */}
          <div style={{
            flex: '1 1 300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            padding: '40px 30px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#ffd700' }}>Our Mission</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              To inspire and empower students by organizing impactful events, fostering collaboration, and promoting continuous learning and innovation.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
