import "./coursepage.css";
import { Navbar } from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export const CoursePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="coursePage">
        <div className="courseSideBar">
          <div className="cc">
            <span>Course Content</span>
            <hr />
          </div>

          <div className="cList">
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                2. PHP Introduction
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon> 5 min
              </span>
            </div>
            <div className="courseContentList">
              <div className="courseContentListTitle">
                1. PHP Introduction{" "}
                <input type="checkbox" className="CheckBox" />
              </div>
              <span className="time">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>5 min
              </span>
            </div>
          </div>
        </div>
        <div className="courseRightBar">
          <iframe
            src="https://www.youtube.com/watch?v=EkTA7klCoz0&list=PLcQPAs1DjFpc4NIeAd4QzxsZYs67UQq6c"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
