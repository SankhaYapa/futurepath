import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./createGig.css";

export const CreateGigs = () => {
  const [textAreaCount, setTextAreaCount] = useState("0");
  const [textDecriptionAreaCount, setTextDecriptionAreaCount] = useState("0");
  const recalculate = (e) => {
    console.log("event value:", e);
    setTextAreaCount(e.target.value.length);
  };
  const desctiptionCount = (e) => {
    console.log("event value:", e);
    setTextDecriptionAreaCount(e.target.value.length);
  };
  return (
    <div>
      {" "}
      <Navbar />
      <div className="creategigPage">
        <div className="creategigContainer">
          <div className="creategigDiv">
            <span className="back">{"< "}Back</span>
            <h1 className="creategigTitle">CREATE A NEW GIG</h1>
            <form
              action="
           "
              className="Form"
            >
              <div className="lableDiv">
                <label className="lable" htmlFor="">
                  Enter Title
                </label>
                <p className="countText"> {`${textAreaCount}/80`} </p>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="2"
                placeholder="I will do ....."
                className="textArea"
                maxLength={80}
                onChange={recalculate}
              ></textarea>
              <label className="lable" htmlFor="">
                Select Category
              </label>
              <select className="Select">
                <option value="" disabled selected>
                  -Select Category-
                </option>
                <option value="">Graphic Design</option>
                <option value="">Video Editing</option>
              </select>
              <div className="lableDiv">
                {" "}
                <label className="lable" htmlFor="">
                  Description
                </label>
                <p className="countText">
                  {" "}
                  {`${textDecriptionAreaCount}/500`}{" "}
                </p>
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Describe Your Skills..."
                className="textArea"
                maxLength={500}
                onChange={desctiptionCount}
              ></textarea>

              <label className="lable" htmlFor="">
                Add Gig Images
              </label>
              <div className="browseImagesDiv">
                <div className="browseImage">
                  <div className="uploadImageIconBox">
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}
                      className="browseIcon"
                    />
                    <span className="browseLink">BROWSE</span>
                  </div>
                </div>
                <div className="browseImage">
                  <div className="uploadImageIconBox">
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}
                      className="browseIcon"
                    />
                    <span className="browseLink">BROWSE</span>
                  </div>
                </div>
              </div>
            </form>

            <div className="uploadResumeButtonDiv">
              <button className="uploadResumeButton"> Upload My New Gig</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
