import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./careerAdvice.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import date from "date-and-time";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const CareerAdvice = () => {
  const [open, setOpen] = useState(false);

  const position = useRef();
  const years = useRef();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickForm = async (e) => {
    e.preventDefault();
    const data = {
      userId: user._id,
      advicerName: user.username,
      position: position.current.value,
      experienceYears: years.current.value,
    };
    console.log(data);
    try {
      await axios.post("/advicer", data);
      handleClick();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState([]);
  const [createdAtDate, setCreatedAtDate] = useState(null);
  const fetchData = async () => {
    const result = await axios.get("/advicer");
    setData(result.data);
    console.log(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="advice">
        <div className="adviceWrapper">
          <div className="addAdvicediv">
            <span className="Titleadvice">Get Advices from Experts:</span>

            <button className="addAdvice" onClick={handleClick}>
              Become a Advicer +
            </button>
            {open && (
              <div className="dialog-form-advice">
                <div className="AddAdviceTitle">
                  <span className="Titleadvice">Advicer Details</span>
                </div>
                <form
                  action="
                "
                  onSubmit={handleClickForm}
                >
                  <div className="addJobLables">
                    <span>Advicer Name</span>
                  </div>
                  <input
                    type="text"
                    value={user.username}
                    className="inputAdvice"
                  />

                  <div className="addJobLables">
                    <span>Advicer Position</span>
                  </div>
                  <input type="text" className="inputAdvice" ref={position} />
                  <div className="addJobLables">
                    <span>Years of Experience</span>
                  </div>
                  <input
                    type="text"
                    maxLength={2}
                    className="inputAdvice"
                    ref={years}
                  />
                  <div className="postaAdvicer">
                    <button className="postaAdvicerButton" type="submit">
                      Post a Job
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div>
            <Carousel>
              <Carousel.Item interval={1000}>
                <div className="CarouselSlicerDiv">
                  {data.map((item) => (
                    <Card
                      style={{
                        width: "15rem",
                        marginRight: "20px",
                        textAlign: "center",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <img
                          src={
                            user.profilePicture
                              ? PF + user.profilePicture
                              : PF + "person/profile.jpg"
                          }
                          alt=""
                          className="CardProImg"
                        />
                      </div>

                      <Card.Body>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Text>{item.position}</Card.Text>
                        <Card.Text>
                          {item.experienceYears} Years Experience
                        </Card.Text>
                        <Button variant="primary">Messege</Button>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
