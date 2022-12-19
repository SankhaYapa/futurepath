import "./newResume.css";
import { Navbar } from "../../components/navbar/Navbar";

export const NewRusume = () => {
  return (
    <div>
      <Navbar />
      <div className="uploadPage">
        <div className="uploadContainer">
          <div className="uploadDiv">
            <span className="back">{"< "}Back</span>
            <h1>UPLOAD A RESUME</h1>
            <span>
              We’ll store your resume to enable you to recommend courses that
              match what you’re looking for!
            </span>
            <div className="buttons">
              <button className="uploadButton">Help Me Build My Resume</button>
              <span className="or">or</span>
              <button className="uploadButton"> I Have A Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
