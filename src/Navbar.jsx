import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Окремий css для меню
import logo from "./assets/Screenshot_1-removebg-preview.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Головна
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            Вхід
          </Link>
          <Link to="/register" onClick={() => setOpen(false)}>
            Реєстрація
          </Link>
          <Link to="/partner-materials" onClick={() => setOpen(false)}>
            Партнери
          </Link>
          <Link to="/podcasts" onClick={() => setOpen(false)}>
            Подкасти
          </Link>
          <Link to="/resources" onClick={() => setOpen(false)}>
            Матеріали
          </Link>
          {/* Нове зовнішнє посилання */}
          <a
            href="https://savelife.in.ua/donate/#donate-army-card-once"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="external-link"
          >
            Підтримати армію
          </a>
          <Link to="/media-laws" onClick={() => setOpen(false)}>
            Закони медіа
          </Link>
        </div>

        <div
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
