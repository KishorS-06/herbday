import React, { useState, useRef } from "react";
import "./theend.css";
import wish from "../assets/wish.mp4";

const Theend = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
    }
  };

  return (
    <div className="theend-container">
      <div className={`video-wrapper ${videoEnded ? "video-ended" : ""}`}>
        <video
          ref={videoRef}
          className="video-player"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          controls
        >
          <source src={wish} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {videoEnded && (
        <button className="replay-button" onClick={handleReplay}>
          <span className="replay-icon">↺</span> Replay Video
        </button>
      )}
    </div>
  );
};

export default Theend;
