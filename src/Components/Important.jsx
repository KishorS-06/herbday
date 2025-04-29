import React, { useState, useRef } from "react";
import "./import.css";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";
import video9 from "../assets/video9.mp4";
import video10 from "../assets/video10.mp4";
import video11 from "../assets/video11.mp4";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import thumb4 from "../assets/thumb4.jpg";
import thumb5 from "../assets/thumb5.jpg";
import thumb6 from "../assets/thumb6.jpg";
import thumb7 from "../assets/thumb7.jpg";
import thumb8 from "../assets/thumb8.jpg";
import thumb9 from "../assets/thumb9.jpg";
import thumb10 from "../assets/thumb10.jpg";
import thumb11 from "../assets/thumb11.png"

const videos = [
  { id: 1, title: "1 year Before", video: video1, thumbnail: thumb1 },
  { id: 2, title: "Snow Fantasy", video: video2, thumbnail: thumb2 },
  { id: 3, title: "An important day of mine", video: video3, thumbnail: thumb3 },
  { id: 4, title: "2024 Baloon fest", video: video4, thumbnail: thumb4 },
  { id: 5, title: "Nalla editt..", video: video5, thumbnail: thumb5 },
  { id: 6, title: "2024 starting", video: video6, thumbnail: thumb6 },
  { id: 7, title: "Concert lla aatam", video: video7, thumbnail: thumb7 },
  { id: 8, title: ".... ", video: video8, thumbnail: thumb8 },
  { id: 9, title: "Apo irundha bond eh vera🥺", video: video9, thumbnail: thumb9 },
  { id: 10, title: "Avlo seekram vida mudiyadhu", video: video10, thumbnail: thumb10 },
  { id: 10, title: "Nyabagam irukkaaa..", video: video11, thumbnail: thumb11 },
];

const Important = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video before closing
      videoRef.current.currentTime = 0; // Reset video to start
    }
    setSelectedVideo(null);
  };

  return (
    <div className="important-container">
      <h2>Exciting Video Collection</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flip-card"
            onClick={() => setSelectedVideo(video.video)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{video.title}</h3>
                <p>Click to Watch</p>
              </div>
              <div className="flip-card-back">
              <img src={video.thumbnail} alt={video.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div className="video-popup" onClick={handleClose}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <video ref={videoRef} src={selectedVideo} controls autoPlay />
          </div>
        </div>
      )}

<div>
        <button id="c" onClick={() => navigate("/Last")}>
          Avlo dhann
        </button>
      </div>
    </div>
  );
};

export default Important;