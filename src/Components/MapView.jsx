import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mapview.css';

const MapView = () => {
    const navigate = useNavigate();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [foundClue, setFoundClue] = useState(false);

    const locations = [
        {
            id: 1,
            name: "unga veedu ulla",
            description: "guess pannu",
            clue: "pakathu room lla",
            isGiftLocation: true,
            emoji: "☕"
        },
        {
            id: 2,
            name: "Unge veetu veliya",
            description: "Car Shead lla",
            clue: "Check behind the wall! 🔍",
            isGiftLocation: false,
            emoji: "🎭"
        },
        {
            id: 3,
            name: "Veetu pinnadi",
            description: "Near the wall",
            clue: "......",
            isGiftLocation: false,
            emoji: "🏡"
        },
        {
            id: 4,
            name: "Surprice",
            description: "it's a secret place",
            clue: "Unga amma ta",
            isGiftLocation: true,
            emoji: "👩"
        }
    ];

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        if (location.isGiftLocation) {
            setFoundClue(true);
        }
    };

    return (
        <div className="map-container">
            <h1>Treasure Hunt! 🗺️</h1>
            <p className="subtitle">Find your special gift by following the clues...</p>
            
            <div className="map-wrapper">
                <iframe
                    title="Special Places Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.5097622771792!2d77.02288829999999!3d10.744603299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzQwLjYiTiA3N8KwMDEnMjYuNyJF!5e0!3m2!1sen!2sin!4v1710471433410!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="location-coordinates">
                <p>📍 Location: 10.7446033°N, 77.0240783°E  "vera engayum alaya vekka mudiyala so easy aana place idhan"</p>
            </div>

            <div className="location-list">
                {locations.map((location) => (
                    <div 
                        key={location.id}
                        className={`location-card ${selectedLocation?.id === location.id ? 'selected' : ''}`}
                        onClick={() => handleLocationClick(location)}
                    >
                        <div className="location-emoji">{location.emoji}</div>
                        <h3>{location.name}</h3>
                        <p>{location.description}</p>
                        {selectedLocation?.id === location.id && (
                            <div className="clue-box">
                                <p className="clue-text">{location.clue}</p>
                                {location.isGiftLocation && (
                                    <div className="gift-found">
                                        <span className="gift-emoji">🎁</span>
                                        <p>Congratulations! You found the right location!</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {foundClue && (
                <div className="success-message">
                    <h2>🎉 You Found It! 🎉</h2>
                    <p>Your gift is waiting openn pannu</p>
                </div>
            )}
        </div>
    );
};

export default MapView; 