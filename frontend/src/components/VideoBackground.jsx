import React from "react";
import videoFile from "../assets/background-video.mp4"; // change filename if needed

const VideoBackground = ({ children }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    zIndex: "-1",
  };

  const overlayStyle = {
    position: "relative",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div style={overlayStyle}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
