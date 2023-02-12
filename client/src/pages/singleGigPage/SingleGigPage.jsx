import "./singleGigPage.css";
import { Navbar } from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowRightFromFile,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const SingleGigPage = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./profile/sas");
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="singleGigPage">
        <div className="singleGigPageContainer">
          <span className="Titel">I will Create Logo for your Business</span>
          <span className="category">
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            Logo design
          </span>
          <div>
            <Link onClick={handleClick}>
              {" "}
              <img
                src={PF + "person/profile.jpg"}
                alt=""
                className="UserprofileImg"
              />
              <span className="UserName">Sankha Bandara</span>
            </Link>

            <button className="ButtonHire">Hire Now</button>
            <button className="Conact">Contact Now</button>
          </div>
          <img src={PF + "post/3.jpeg"} alt="" className="GigImage" />
          <span className="AboutGig">About Gig</span>
          <span className="desc">
            The SUPER CONCEPT gig. I will draw 1 concept ship/object in color,
            and then convert the same drawing to a black and white version with
            labels, plus a side, top and rear view done in vector software. SEE
            THE EXAMPLE. I specialize in coming up with great ideas to bring my
            clients' ideas to life - even if they don't know exactly what they
            want. Let me help you make your ideas for your game, story, comic,
            or book a reality. I can come up with and draw original science
            fiction-type spaceships and vehicles that you might find in popular
            sci-fi movies. No environments. I have almost 20 years' experience
            designing spaceships and vehicles. My sample images show the style
            and the quality of my work. You will have full exclusive rights to
            the work. I work in pen, COPIC markers, as well as vector and
            digital painting software. I ALSO DO SPACESHIP DECK MAPS AND
            THUMBNAIL SKETCHES. CONTACT ME FOR A QUOTE. Due to the fact that
            work is done in pen and paper, revisions are done before I start the
            final piece. Only small tweaks can be made after the final drawing
            is completed. If you have any questions, feel free to contact me.
            Please see the examples of each type of gig.
          </span>
        </div>
      </div>
    </div>
  );
};
