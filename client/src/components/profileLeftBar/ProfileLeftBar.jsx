import "./profileLeftBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartPlus,
  faCarTunnel,
  faLocation,
  faLocationPin,
  faMailBulk,
  faMailReply,
  faMailReplyAll,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export const ProfileLeftBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="profielLeft">
      <img src={PF + "person/profile.jpg"} alt="" className="UserprofileImg" />
      <h1 className="Username">SANKHA BANDARA</h1>
      <span>Kandy,Sri Lanka</span>
      <div className="AreaButtons">
        <button className="ContactBtn">
          <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
          {" Follow"}
        </button>
        <button className="ContactBtn">
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          {" Contact Me"}
        </button>
      </div>

      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
          <span> From</span>
        </div>
        <span>Kandy</span>
      </div>
      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span> Phone</span>
        </div>
        <span>0763423567</span>
      </div>
      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
          <span> Mail</span>
        </div>
        <span className="subdetails">sankhapriyamantha55@gmail.com</span>
      </div>
      <div>
        <h4 className="Description">Description</h4>
        <span>
          If you are using text-overflow:ellipsis, the browser will show the
          contents whatever possible within that container. But if you want to
          specifiy the number of letters before the dots or strip some contents
          and add dots, you can use the below function.
        </span>
      </div>
      <div className="SkillsDiv">
        <h4 className="Description">Skills</h4>
        <div className="Skills">Digital painting</div>
        <div className="Skills">Character animation</div>
        <div className="Skills">Digital painting</div>
        <div className="Skills">Digital painting</div>
        <div className="Skills">Digital painting</div>
        <div className="Skills">Digital painting</div>
      </div>
      <div className="SkillsDiv">
        <h4 className="Description">Education</h4>
        <h5 className="Description">Associate - Animation</h5>
        <h5>Indonesian Institute of the Arts, Indonesia, Graduated 2019</h5>
      </div>
    </div>
  );
};
