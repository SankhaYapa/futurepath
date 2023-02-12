import {
  faArrowDown,
  faArrowDown19,
  faArrowDownShortWide,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./courses.css";

export const Courses = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="FilterBar">
        <div className="fillterby">
          Filter by
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </div>
        <div>
          <input type="text" className="search" placeholder="search here" />
        </div>
      </div>

      <div className="coursesTab">
        <div className="TimelineContainer">
          <div className="gig">
            <img src={PF + "/post/js.png"} alt="" className="gigImg" />
            {/* 
            <div className="profileImgAndName"> */}
            {/* <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/profile.jpg"
                }
                alt=""
                className="profileImg"
              /> */}
            {/* <span className="uname"></span>
            </div> */}

            <div className="titlegigwrapper">
              <span className="titlegig">JavaScript Basics for Beginners</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
