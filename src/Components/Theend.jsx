import React, { useState, useRef } from "react";
import axios from "axios";
import "./theend.css";
import wish from "../assets/wish.mp4"; // Ensure correct path to your video

const Theend = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setShowPopup(true);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
      setShowPopup(false);
      setFeedbackSent(false);
      setMessage("");
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://herbday-backend.onrender.com/api/message", { content: message });
      setFeedbackSent(true);
      setIsTyping(false);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
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

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {feedbackSent ? (
              <div className="status-message success">
                <div className="success-icon">✅</div>
                <div className="success-message">Thank you.... please maariradha naa eppavum adhe kishor dhan expect pannuvan un kitta irundhu bcz vera yarum illa.Nee matured ah iruka solra but kolandhai lla sanda pottan ippavum apdi dhan panran unta mattum dha purunjuppa nnu nenaikran ennoda priority eppavum nee dhan once again thank you!!!!!! kanishkaaaaaa 🥹</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="message-form">
                <h2 className="popup-header">Thonradha sollu paduchukran mudunja maathikran</h2>
                <div className="textarea-wrapper">
                  <textarea
                    id="message"
                    value={message}
                    onChange={handleTyping}
                    required
                    rows={5}
                    placeholder="Type your heartfelt message here..."
                  />
                  <div className="char-count">{message.length} characters</div>
                </div>
                {isTyping && <div className="typing-indicator">💬 Typing...</div>}
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Theend;
