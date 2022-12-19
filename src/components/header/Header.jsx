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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBriefcase} />

            <span>Jobs</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHandshakeAngle} />
            <span>Career Advice</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Recommended Jobs</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Recommended Courses</span>
          </div>
        </div>
        <div className="headerUpload">
          <div>
            <h1 className="headerTitle">START TO BUILD YOUR CAREER…FAST!</h1>
            <p className="headerDesc">
              Upload by skills. View courses.Complete Courses. One-click apply.
            </p>
          </div>
          <div className="upload">
            <p className="headeruploadDesc">MAKE YOUR SEARCH EASY.</p>
            <h1 className="headeruploadTitle">UPLOAD YOUR RESUME</h1>
            <p className="headeruploadDesc">
              Don't have a resume? Build one in 3 steps.
            </p>
            <button className="uploadBtn">Upload / Build Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
