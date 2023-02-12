import axios from "axios";
import React, { useState } from "react";

export const Career = () => {
  const [cvText, setCvText] = useState("");
  const [careerPath, setCareerPath] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:5000/api/careerpath", {
        cvtext: cvText,
      })
      .then((response) => {
        setCareerPath(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <textarea value={cvText} onChange={(e) => setCvText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Career Path: {careerPath}</p>
    </div>
  );
};
