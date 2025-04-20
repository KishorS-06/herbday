import React, { useState, useEffect } from "react";
import "./last.css";
import { useNavigate } from "react-router-dom";

const Last = () => {
  const navigate = useNavigate(); // Moved here to avoid errors
  const [showSuspense, setShowSuspense] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Show the suspense box after 3 seconds
  useEffect(() => {
    const suspenseTimer = setTimeout(() => {
      setShowSuspense(true);
    }, 3000);
    return () => clearTimeout(suspenseTimer);
  }, []);

  // Function to verify password
  const handleVerifyPassword = () => {
    if (password.trim() === "sanda podradhu") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password! Try again.");
    }
  };

  return (
    <div className="last-container">
      {/* Suspense Box with Input */}
      {showSuspense && !isAuthenticated && (
        <div className="suspense-box">
          <h3>Unakku Thonradhu sollitu inga type:</h3>
          <input
            type="password"
            placeholder="Namma eppavum panra visyam"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <button className="verify-btn" onClick={handleVerifyPassword}>
            Unlock Message
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {/* Message Input & Display */}
      {isAuthenticated && (
        <div className="message-display">
          <h2 className="animated-message">
            {customMessage || (
              <>
                Happy Birthday Kanishka. <br />
                You are the most important person in my life, and I can't imagine my world without your friendship. <br />
                Bcz you have been a moral support to me<br />
                I cherish our friendship more than words can express, and I will never let go of it, no matter what. <br />
                Our journey together, filled with both the ups and downs, has only made our bond stronger. <br />
                I promise you, I will always stand by your side. <br />
                I believe that our friendship is proof that true connections are beyond what others may say. <br />
                I swear, I will never leave you. 🎉 <br />
                <br />
                Aprm naa ipo llam neraya possesive aagran adhukku main ah sorry. <br />
                Siladhu unnoda nalladhukku aprm neraya thevai illama adhukkum sorry. <br />
                Neraya sanda potadhukku sorry. Pesama irundadhukku sorry. <br />
                Avoid pannadhukku sorry. Expectations vechadhukku sorry. 🥺 <br />
                Unna purunjukadadhukku sorry. <br />
                <br />
                Aprmm pls ennaikkum nee en friendship ah vitradha. <br />
                Nee enakku avlo important. <br />
                Pls naa panradha ellam bare panniko ella time uh pannikra iniyum panniko. 🌟 <br />
                <br />
                Nee unakku enna thomudho adha pannu.naa romba hurt aavan but adha enakku ulla eh vechukran nee jolly ah yar kuda irukanum oh iru 🥺 <br />
                Aprmm kadaisi ah edhayum nenachu feel pannadha, nee jolly ah iru. <br />
                Enna nedandhalum paathukalaam, I will always be there for you as a Bestttttttttttttt Friend 🤗 <br />
                Have a great year ahead and once again a happiest birthdayyyy Kanishkaa ❤‍🩹 <br />
                <br />
                Ippodhukku 16 years friendship adhu en grave varaikkum irukanum nnu I wishh 🙏
              </>
            )}
          </h2>
          <button id="d" onClick={() => navigate("/Last1")}>
            Seri wish panna vah..
          </button>
        </div>
      )}
    </div>
  );
};

export default Last;