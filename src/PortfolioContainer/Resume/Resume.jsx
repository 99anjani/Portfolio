import React from "react";
import Typical from "react-typical";
import background_Resume from "../Assets/background.png";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container" id="resume">
      <div className="resume">
        <table>
          <tr className="edu-header">👩‍🎓 Education</tr>
          <tr className="resume-parts">
            <div className="education">
              <div id="edu-university">
                <table className="resume-table">
                  <tr>
                    <td className="edu-item">
                      <h3>Bsc Information Technology (Hons)</h3>

                      <p>Faculty of Information Technology</p>
                      <p> University of Moratuwa</p>
                    </td>
                    <td className="edu-item">
                      {" "}
                      <h5>
                        🗓 <small>2021 - 2025</small>
                      </h5>
                      <p>Specialized in Information Technology</p>
                      <p>
                        Current GPA : 3.21{" "}
                        <p>
                          <small>(Up to Level 02 Semester 01)</small>
                        </p>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </tr>
          <tr className="resume-parts">
            <div className="education">
              <div id="edu-university">
                <table>
                  <tr>
                    <td className="edu-item">
                      <h3>G.C.E Advanced Level Examination</h3>

                      <p> H/Ruhunu Vijayaba National College</p>
                    </td>
                    <td className="edu-item">
                      {" "}
                      <h5>
                        🗓 <small>2019 - 2016</small>
                      </h5>
                      <p>
                        Physical Science Stream
                        <p>
                          <small>
                            Combined Mathematics A | Chemistry B | Physics B
                          </small>
                        </p>
                      </p>
                      <ul>
                        <li>Island Rank : 909</li>
                        <li>District Rank : 44</li>
                        <li>Z score : 1.4935</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </tr>
          <tr className="resume-parts">
            <div className="education">
              <div id="edu-university">
                <table>
                  <tr>
                    <td className="edu-item">
                      <h3>G.C.E Ordinary Level Examination</h3>

                      <p>H/Ruhunu Vijayaba National School</p>
                    </td>
                    <td className="edu-item">
                      <h5>
                        🗓 <small>2010 - 2015</small>
                      </h5>

                      <p>
                        Results - 7As & 2Bs
                        <p>
                          <small>
                            English B| Second Language(Tamil) B | ICT A
                          </small>
                        </p>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}
