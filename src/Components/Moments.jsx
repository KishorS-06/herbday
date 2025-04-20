import React, { useState } from "react";
import "./moments.css";
import { useNavigate } from "react-router-dom";
import moment1 from "../assets/moment1.jpg";
import moment2 from "../assets/moment2.jpg";
import moment3 from "../assets/moment3.jpg";
import moment4 from "../assets/moment4.jpg";
import moment5 from "../assets/moment5.jpg";
import moment6 from "../assets/moment6.jpg";
import moment7 from "../assets/moment7.jpg";
import moment8 from "../assets/moment8.jpg";
import moment9 from "../assets/moment9.jpg";
import moment10 from "../assets/moment10.jpg";
import moment11 from "../assets/moment11.jpg";
import moment12 from "../assets/moment12.jpg";
import moment13 from "../assets/moment13.jpg";
import moment14 from "../assets/moment14.jpg";
import moment15 from "../assets/moment15.jpg";
import moment16 from "../assets/moment16.jpg";
import moment17 from "../assets/moment17.jpg";
import moment18 from "../assets/moment18.jpg";

const moments = [
  { id: 1, image: moment1, caption: "Indha kanishka cure uh appavum frda ah onna dha irundhom eppavum iruppan naa😊" },
  { id: 15, image: moment15, caption: "Nee avlo happy ah irundhu naa paathadhu" },
  { id: 2, image: moment2, caption: "edha podradhu nnu snd panna neraya nyabagam irukka" },
  { id: 3, image: moment3, caption: "Naa kevalam ah irundhalum nalla pic-pongal 2024" },
  { id: 4, image: moment4, caption: "Apo romba happy ah irundhom Baloon fest 2023 🫂" },
  { id: 5, image: moment5, caption: "Brooks lla Heatsquare kku veliya" },
  { id: 6, image: moment6, caption: "2023 un Bday nyabam irukka" },
  { id: 7, image: moment7, caption: "GV concer nee kooda dance aadrakku kooda low ah feel panna nnu sonna lla" },
  { id: 8, image: moment8, caption: "2024 Bday kku munnathu naal Haappy you" },
  { id: 9, image: moment9, caption: "2023 Subi bday apo roundana lla" },
  { id: 10, image: moment10, caption: "Nila edutha photo ava neetu minnadi aprm `Thangam` nyabagam irukka" },
  { id: 11, image: moment11, caption: "Charu oda kevalam aana photo ana nee nalla irukka" },
  { id: 12, image: moment12, caption: "24/10/24 whatsapp poi paaru un comfort zone theriyum `nee enakku avlo mukkiyam` " },
  { id: 13, image: moment13, caption: "Enna mereati edutha photo agilan eduthu kuduthan " },
  { id: 14, image: moment14, caption: "Appo ellam vera madhhri irundhuchu jolly ah happy ah" },
  { id: 16, image: moment16, caption: "Cute aana photo kolandha yah sonnan" },
  { id: 17, image: moment17, caption: "😂" },
  { id: 18, image: moment18, caption: "Summa oru meet upo apo nalla irundhuchu andha naal.." },
];

const Moments = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleImageClick = (moment) => {
    setSelectedImage(moment);
    setIsPaused(true);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setIsPaused(false);
  };

  return (
    <div className="moments-container" onClick={handleClosePopup}>
      <h1>Memorable Moments</h1>

      {/* ✅ Image Scroller */}
      <div className="scroll-container">
        <div className={`image-slider ${isPaused ? "paused" : ""}`}>
          {[...moments, ...moments].map((moment, index) => (
            <div
              key={index}
              className="image-box"
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick(moment);
              }}
            >
              <img src={moment.image} alt={moment.caption} />
              <p>{moment.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Image Popup */}
      {selectedImage && (
        <div className="popup" onClick={handleClosePopup}>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
            <button className="close-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ Fixed Button for Navigation */}
      <div>
        <button id="b" onClick={() => navigate("/important")}>
          Aduthu Polam Ahh....
        </button>
      </div>
    </div>
  );
};

export default Moments;
