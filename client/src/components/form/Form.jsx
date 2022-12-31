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

import "./form.css";
import { Navbar } from "../../components/navbar/Navbar";
import { useState } from "react";

export const Form = () => {
  const [openStep, setOpenStep] = useState(false);
  return (
    <div>
      <div className="formPage">
        <div className="formContainer">
          <div className="formDiv">
            <span className="back">{"< "}Back</span>
            <h1 className="resumeTitle">LET"S CREATE A RESUME</h1>
            <span className="resumeDsc">
              Hurry Up!! Complete few steps and build your path
            </span>
            <br></br>
            <br></br>
            <form
              action="
"
            >
              <div>
                <div>
                  <h2>Personal Details</h2>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="formInputs"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="formInputs"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="formInputs"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="formInputs"
                  />
                </div>
              </div>
              <div>
                <h2>Education</h2>
                <div>
                  <input
                    type="text"
                    placeholder="School Name"
                    className="formInputs"
                  />
                </div>
              </div>
            </form>
            <div className="uploadResumeButtonDiv">
              <button className="uploadResumeButton"> Upload My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
