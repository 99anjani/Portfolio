import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="profile-header">
      <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            <h4>Nethmi Anjani 👩‍💻</h4>
          </a> */}
          
          <div className="collapse navbar-collapse" id="navbarNav">
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
          </div>
        </div>
      </nav>
    </div>
  );
}


{/* <li className="nav-item">
                
                <Link className="nav-link" to='/about'>About</Link>
              </li> */}