import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./gig.css";
export default function Gig({ gig }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { currentuser } = useContext(AuthContext);
  const handleButton = () => {
    navigate("./creategig");
  };
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${gig.userId}`);
      setUser(res.data);
      console.log(res);
    };
    fetchUser();
  }, [gig.userId]);

  return (
    <div className="gig">
      <Link to={`profile/${user.username}/singlepagegig/${gig._id}`}>
        <img src={PF + `gig/${gig.img}`} alt="" className="gigImg" />
      </Link>
      <Link to={`profile/${user.username}`} style={{ textDecoration: "none" }}>
        <div className="profileImgAndName">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/profile.jpg"
            }
            alt=""
            className="profileImg"
          />
          <span className="uname">{user.username}</span>
        </div>
      </Link>
      <div className="titlegigwrapper">
        <span className="titlegig">{gig.title}</span>
      </div>
    </div>
  );
}
