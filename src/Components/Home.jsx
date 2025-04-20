import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="outer">
      <div className="box">
        <h1>👑 To My Bestestestest Friend 🎂</h1>
        <button id="a" onClick={() => navigate("/moments")}>Let's GO.!</button>
      </div>
    </div>
  );
};

export default Home;
