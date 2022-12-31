import { useState } from "react";
import "./ProfileRightBar.css";

import React from "react";
import { Courses } from "../courses/Courses";
import { MyLearning } from "../myLearnings/MyLearning";
import { Gigs } from "../gigs/Gigs";

export const ProfileRightBar = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
          <Gigs></Gigs>
        </div>
      </div>
    </div>
  );
};
