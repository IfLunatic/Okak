import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import PartnerMaterials from "./PartnerMaterials";
import Podcasts from "./Podcasts";
import Resources from "./Resources";

function App() {
  return (
    <Router>
     <nav>
      <Link to="/">Головна</Link> |{" "}
      <Link to="/login">Вхід</Link> |{" "}
      <Link to="/register">Реєстрація</Link> |{" "}
      <Link to="/partner-materials">Партнери</Link> |{" "}
      <Link to="/podcasts">Подкасти</Link> |{" "}
      <Link to="/resources">Матеріали</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/partner-materials" element={<PartnerMaterials />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
    </Router>
  );
}

export default App;
