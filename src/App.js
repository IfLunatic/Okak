import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // імпорт меню

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import PartnerMaterials from "./PartnerMaterials";
import Podcasts from "./Podcasts";
import Resources from "./Resources";
import MediaLaws from "./MediaLaws";

function App() {
  return (
    <Router>
      <Navbar /> {/* Замінюємо nav на цей компонент */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partner-materials" element={<PartnerMaterials />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/media-laws" element={<MediaLaws />} />
      </Routes>
    </Router>
  );
}

export default App;
