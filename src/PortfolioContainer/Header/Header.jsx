import React from "react";
import { useRef } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
 
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <BrowserRouter>
      <header>
          <h5>Nethmi Anjani👩‍💻</h5>
          <nav ref={navRef}>
            <ul className="items">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
      </header>
    </BrowserRouter>
  );
}

