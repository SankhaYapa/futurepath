import "./gigs.css";
import {
  faArrowDown,
  faArrowDown19,
  faArrowDownShortWide,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export const Gigs = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("./creategig");
  };
  return (
    <div className="gigPage">
      <div className="gigcreatebuttonwrapper">
        <button className="gigcreatebutton" onClick={handleButton}>
          Create Gig +
        </button>
      </div>
      <div>
        <div className="gigTab">
          <div className="gigs">
            <img src={PF + "/post/1.jpeg"} alt="" className="gigImg" />
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
    </div>
  );
};
