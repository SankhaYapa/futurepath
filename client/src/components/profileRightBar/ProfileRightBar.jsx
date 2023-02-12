import { useContext, useEffect, useState } from "react";
import "./ProfileRightBar.css";

import React from "react";
import { Courses } from "../courses/Courses";
import { MyLearning } from "../myLearnings/MyLearning";

import { TimeLine } from "../timelines/TimeLine";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Gig from "../gig/Gig";

export const ProfileRightBar = () => {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();
  const username = useParams().username;
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleButton = () => {
    navigate("./creategig");
  };

  const [gigs, setGigs] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchGigs = async () => {
      const res = username
        ? await axios.get("/gigs/profile/" + username)
        : await axios.get("gigs/timeline/" + user._id);
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
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All Courses
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          My Learning
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Gigs
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Recommended Jobs
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Courses />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <MyLearning></MyLearning>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="gigcreatebuttonwrapper">
            <button className="gigcreatebutton" onClick={handleButton}>
              Create Gig +
            </button>
          </div>
          <div className="TimelineContainer">
            {gigs.map((p) => (
              <Gig key={p._id} gig={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
