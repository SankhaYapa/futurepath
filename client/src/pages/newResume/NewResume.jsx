import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faBriefcase,
  faHandshakeAngle,
  faGraduationCap,
  faUpload,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./newResume.css";
import { Navbar } from "../../components/navbar/Navbar";

export const NewResume = () => {
  return (
    <div>
      <Navbar />
      <div className="uploadResumePage">
        <div className="uploadResumeContainer">
          <div className="uploadResumeDiv">
            <span className="back">{"< "}Back</span>
            <h1 className="resumeTitle">UPLOAD A RESUME</h1>
            <span className="resumeDsc">
              We’ll store your resume to enable you to recommend courses that
              match what you’re looking for!
            </span>
            <br></br>
            <br></br>
            <span className="resumeSubDsc">SELECT A FILE FROM YOUR DEVICE</span>
            <div className="browseArea">
              <div className="browse">
                <div className="uploadIconBox">
                  <FontAwesomeIcon
                    icon={faCloudArrowUp}
                    className="browseIcon"
                  />
                  <span className="browseLink">BROWSE</span>
                </div>
              </div>

              <textarea
                className="browseInput"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="uploadResumeButtonDiv">
              <button className="uploadResumeButton"> Upload My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
