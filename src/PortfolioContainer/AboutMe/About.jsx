import React from "react";
import "./About.css";
import background from "../Assets/background.png";
import profile from "../Assets/profile.png";


export default function Profile() {
  return (
    <div className="about-container" id="about">
      <div className="about-con">
      <table className="about-table">
        <td className="about-td">
          <div className="about-main">
            <p>
              <img className="about-profile-img" src={profile}></img>
            </p>
            <div className="about-parent">
              <div className="about-detail">
                <div className="about-details-name">
                  <span className="about-text">
                    {" "}
                    <h2>Nethmi Anjani </h2>
                  </span>
                  <h4>IT Undergraduate</h4>
                </div>
                <div className="colz">
                  <div className="colz-icon">
                    <a href="https://web.facebook.com/nethmianjanigunrathne">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/nethmi_anjani_23/">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://github.com/99anjani">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nethmi-anjani-15a7ab230/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className="about-me">
          {/* <span className="primary-text">
            {" "}
            <h2>
              {" "}
              <Typical
                loops={Infinity}
                steps={["Full-stack developer 👩‍💻", 1000]}
              />
            </h2>
          </span> */}
          <h2>Who Am I .........</h2>
          <p className="about-discription">
            I am a diligent person who has a profound enthusiasm for computer
            science and enjoys using various technologies. I am eager to take on
            new challenges with dedication and a sense of responsibility.
          </p>
        </td>
      </table>
      </div>
    </div>
  );
}
