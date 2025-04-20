import React, { useState, useRef, useEffect } from 'react';
import './last1.css';
import { useNavigate } from "react-router-dom";

const Last1 = () => {
  const navigate = useNavigate();
  const [isLit, setIsLit] = useState(false);
  const audioRef = useRef(null);

  const handleCandleClick = () => {
    setIsLit(true);
    if (!audioRef.current) {
      audioRef.current = new Audio('/music.mp3');
      audioRef.current.loop = true;
      audioRef.current.play().catch((err) => {
        console.error("🔇 Music error:", err);
      });
    }
  };

  // 🛑 Stop music when component unmounts (i.e., navigate away)
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const balloonLetters = ['H', 'B', 'D', 'D', 'U', 'C', 'K'];

  return (
    <div className="container full-screen">
      {/* Light Bulbs */}
      <div className={`bulb-container ${isLit ? 'bulb-container-active' : ''}`}>
        {['blue', 'green', 'orange', 'pink', 'red', 'yellow', 'white'].map((color, index) => (
          <img
            key={index}
            src={`/bulb_${color}.png`}
            alt={`bulb-${color}`}
            className={`bulb bulb-glow bulb-glow-${index + 1}`}
          />
        ))}
      </div>

      {/* Banner */}
      <img src="/banner.png" alt="Happy Birthday" className="banner" />

      {/* Balloons + Cake */}
      {isLit && (
        <>
          <div className="balloons">
            {balloonLetters.map((letter, index) => (
              <div key={index} className="balloon">
                <img
                  src={`/b${index + 1}.png`}
                  alt={`balloon-${index + 1}`}
                  className="balloon-image"
                />
                <span className="balloon-letter">{letter}</span>
              </div>
            ))}
          </div>

          <div className="cake" onClick={() => navigate("/Theend")}>
            <img src="/cake128.png" alt="cake" className="cake-image" />
          </div>
        </>
      )}

      {/* Message */}
      {isLit && (
        <div className="message">Wishing You a Fantastic Year Ahead! 🎁</div>
      )}

      {/* Light Candle Button */}
      {!isLit && (
        <button className="btn" onClick={handleCandleClick}>
          Inga 👇
        </button>
      )}
    </div>
  );
};

export default Last1;
