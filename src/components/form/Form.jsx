import "./form.css";

export const Form = () => {
  return (
    <div className="formPage">
      <div className="formContainer">
        <div className="formDiv">
          <span className="back">{"< "}Back</span>
          <h1 className="formtitle">BUILD A NEW RESUME</h1>
          <span>
            Complete simple steps to have a resume to build your path!
          </span>
          <div className="buttons">
            <button className="formButton">Help Me Build My Resume</button>
            <span className="or">or</span>
            <button className="formButton"> I Have A Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};
