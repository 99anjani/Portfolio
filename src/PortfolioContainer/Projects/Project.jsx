import React from "react";
import background_project from "../Assets/background.png"
import project_img_hw from "../Assets/Samrt-Sealing-Mechine.png";
import project_img_sw from "../Assets/Config-Console.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="project-container">
      <div className="project">
        <table>
          <tr className="project-header">👩‍💻 Projects</tr>
          <tr className="project-parts">
            <div className="project-done">
              <div className="se-project" id="project-details">
                <table>
                  <tr>
                    <td className="project-item">
                      <p>
                        {/* <img className="project-img-item" src={project_img}></img> */}
                        <img className="project-img" src={project_img_sw}></img>
                      </p>
                    </td>
                    <td className="project-item">
                      <h4>Configuration Console</h4>
                      <p>
                        This is a web-based platform designed to streamline
                        communication. It enables partners to access client
                        servers, reducing developers' workload and enhancing
                        efficiency in bug fixing and client support. As a member
                        of the team I'm carrying responsibilities of "Register
                        users" and "profile management" features.
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              <div id="project-details">
                <table>
                  <tr>
                    <td className="project-item">
                      <p>
                        {/* <img className="project-img-item" src={project_img}></img> */}
                        <img className="project-img" src={project_img_hw}></img>
                      </p>
                    </td>
                    <td className="project-item">
                      <h4>Automated Sealing Machine</h4>
                      <p>
                        Designed and developed an automated system to address
                        the challenges of manual sealing by eliminating manual
                        effort and ensuring document security. The
                        implementation has been done through Atmel Studio and
                        Proteus software.
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
