import React from "react";
import Typical from "react-typical";
import background_profile from "./Images/background.png";
import profile from "./Images/profile.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile">
        {/* <p>
          <img className="profile-img" src={profile}></img>
        </p> */}
        <div className="container">
        <ul className="profile-web"><li>anjanigsn.netlify.app</li>
        <li className="details">University of Moratuwa (UG)</li></ul>
        
        
      </div>
      </div>
    </div>
  );
}
