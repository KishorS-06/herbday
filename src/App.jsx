import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Moments from "./Components/Moments";
import Important from "./Components/Important";
import Last from "./Components/Last";
import Last1 from "./Components/Last1";
import Theend from "./Components/Theend";
import MapView from "./Components/MapView";

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/important" element={<Important />} />
            <Route path="/last" element={<Last />} />
            <Route path="/last1" element={<Last1 />} />
            <Route path="/theend" element={<Theend />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;