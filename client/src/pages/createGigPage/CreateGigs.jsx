import {
  faCancel,
  faClose,
  faCloudArrowUp,
  faDedent,
  faDeleteLeft,
  faRecycle,
  faRemove,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./createGig.css";

export const CreateGigs = () => {
  const [textAreaCount, setTextAreaCount] = useState("0");
  const [textDecriptionAreaCount, setTextDecriptionAreaCount] = useState("0");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const recalculate = (e) => {
    console.log("event value:", e);
    setTextAreaCount(e.target.value.length);
  };
  const desctiptionCount = (e) => {
    console.log("event value:", e);
    setTextDecriptionAreaCount(e.target.value.length);
  };

  const title = useRef();
  const category = useRef();
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newGig = {
      userId: user._id,
      title: title.current.value,
      category: category.current.value,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);

      newGig.img = fileName;
      try {
        await axios.post("/upload", data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("/gigs", newGig);
      window.location.reload();
      navigate("/profile/" + user.username);
    } catch (error) {}
  };
  const handleBack = () => {
    navigate("/profile/" + user.username);
  };
  return (
    <div>
      {" "}
      <Navbar />
      <div className="creategigPage">
        <div className="creategigContainer">
          <div className="creategigDiv">
            <span className="back" onClick={handleBack}>
              {"< "}Back
            </span>
            <h1 className="creategigTitle">CREATE A NEW GIG</h1>
            <form
              action="
           "
              className="Form"
              onSubmit={submitHandler}
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
                ref={title}
              ></textarea>

              <label className="lable" htmlFor="">
                Select Category
              </label>
              <select className="Select" ref={category}>
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
                ref={desc}
              ></textarea>

              <label className="lable" htmlFor="">
                Add Gig Images
              </label>
              <div className="browseImagesDiv">
                <div className="browseImage">
                  <label htmlFor="file" className="uploadImageIconBox">
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}
                      className="browseIcon"
                    />
                    <span className="browseLink">BROWSE</span>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                </div>
                <div className="browseImage">
                  {file && (
                    <div className="browseImageShowContainer">
                      <img
                        className="gigThumImg"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="uploadImgCancel"
                        onClick={() => setFile(null)}
                      ></FontAwesomeIcon>

                      {/* <div className="uploadImageIconBox">
  <FontAwesomeIcon
    icon={faCloudArrowUp}
    className="browseIcon"
  />
  <span className="browseLink">BROWSE</span>
</div> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="uploadResumeButtonDiv">
                <button className="uploadResumeButton" type="submit">
                  {" "}
                  Upload My New Gig
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
