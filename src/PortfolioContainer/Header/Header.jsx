import React from "react";
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";

export default function Header() {
  return (<BrowserRouter>
    <div className="profile-header" id="header">
      <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            <h4>Nethmi Anjani 👩‍💻</h4>
          </a> */}
          
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
          </div>
        </div>
      </nav>
    </div>
    </BrowserRouter>
  );
}


{/* <li className="nav-item">
                
                <Link className="nav-link" to='/about'>About</Link>
              </li> */}

              /*
              <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">
                 Home
                </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
              */