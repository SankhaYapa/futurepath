import {
  faArrowDown,
  faArrowDown19,
  faArrowDownShortWide,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">
            Learn PHP for Beginners Learn PHP for Beginners
          </span>
        </div>
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">Learn PHP for Beginners</span>
        </div>
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">Learn PHP for Beginners</span>
        </div>
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">Learn PHP for Beginners</span>
        </div>
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">Learn PHP for Beginners</span>
        </div>
        <div className="course">
          <img src={PF + "/post/1.jpeg"} alt="" className="courseImg" />
          <span className="title">Learn PHP for Beginners</span>
        </div>
      </div>
    </>
  );
};
