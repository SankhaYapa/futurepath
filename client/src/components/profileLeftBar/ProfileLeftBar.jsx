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
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export const ProfileLeftBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { user: currentUser } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);

  // useEffect(() => {
  //   setFollowed(currentUser.followings.includes(user?.id));
  // }, [currentUser, user.id]);
  console.log(username);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
      console.log("gig.userId");
    };
    fetchUser();
  }, []);
  const handleClick = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profielLeft">
      <img
        src={PF + "person/profile.jpg"}
        alt=""
        className="UserprofileImage"
      />
      <h1 className="Username">{user.username}</h1>
      <span>
        {user.city},{user.country}
      </span>
      {user.username !== currentUser.username && (
        <div className="AreaButtons">
          <button className="ContactBtn" onClick={handleClick}>
            <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            {/* {followed ? "Unfollow" : "Followed"} */}
          </button>
          <button className="ContactBtn">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            {" Contact Me"}
          </button>
        </div>
      )}
      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
          <span> From</span>
        </div>
        <span>
          {user.city},{user.country}
        </span>
      </div>
      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span> Phone</span>
        </div>
        <span>{user.phone}</span>
      </div>
      <div className="Location">
        <div>
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
          <span> Mail</span>
        </div>
        <span className="subdetails">{user.email}</span>
      </div>
      <div>
        <h4 className="Description">Description</h4>
        <span>{user.desc}</span>
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
