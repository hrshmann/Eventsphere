import React, { useState } from "react";
import bgVideo from "../assets/Bg.mp4";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      to_name: "Admin", // Must match template variable
      from_name: formData.name, // Sender name
      message: `${formData.message}\n\nSubject: ${formData.subject}\nEmail: ${formData.email}`, // Message content
    };

    emailjs
      .send(
        "service_gmvv42p",   // Your Service ID
        "template_jlk7iuv",  // Your Template ID
        templateParams,
        "mlpUFUJi7lNOquHCb" // Your Public Key
      )
      .then(() => {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(
          "Failed to send your message. Please check your inputs or try again later."
        );
      });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
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
          zIndex: "-1",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div
        style={{
          padding: "20px 50px",
          maxWidth: "1200px",
          margin: "0 auto",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: "cursive",
            fontSize: "3rem",
          }}
        >
          Contact & Support
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Form Section */}
          <div
            style={{
              flex: "1",
              minWidth: "350px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "white" }}>
              Send Us Your Query / Feedback
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, height: "120px" }}
              ></textarea>

              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#071ff3ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div
            style={{
              flex: "1",
              minWidth: "350px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "white" }}>
              Our Contact Details
            </h2>

            <p>
              <strong>Address:</strong> Phase-2, Urban Estate, Pratappura Road
              near Lambra, Shahpur, Jalandhar, Punjab 144020
            </p>
            <p>
              <strong>Email: </strong> info@ctgroup.in
            </p>
            <p>
              <strong>Phone:</strong> 18001372227
            </p>

            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.0523543262006!2d75.55178777555139!3d31.23711487433712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5ceb6af378e7%3A0xa8149a53d9b2805!2sPhase%202%2C%20Urban%20Estate%2C%20Pratappura%20Road%2C%20near%20Lambra%2C%20Shahpur%2C%20Jalandhar%2C%20Punjab%20144020!5e0!3m2!1sen!2sin!4v1733567571234!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "10px", marginTop: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

export default ContactUs;
