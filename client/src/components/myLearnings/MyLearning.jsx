import "./myLearning.css";
import {
  faArrowDown,
  faArrowDown19,
  faArrowDownShortWide,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const MyLearning = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      {" "}
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
    </div>
  );
};
