import { Link } from "react-router-dom";
import "./timeLine.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Gig from "../gig/Gig";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const TimeLine = ({ username }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [gigs, setGigs] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchGigs = async () => {
      const res = await axios.get("/gigs");
      setGigs(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      console.log(res.data);
    };
    fetchGigs();
  }, []);

  return (
    <div className="Timeline">
      <div className="TimeLineWrapper">
        <span className="hed">Services Timeline</span>
        <div className="TimelineContainer">
          {gigs.map((p) => (
            <Gig key={p._id} gig={p} />
          ))}
        </div>
        <span className="hed">Expand your career opportunities</span>
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
    </div>
  );
};
