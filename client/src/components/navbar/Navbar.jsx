import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

export const Navbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleClick1 = () => {
    navigate("./login");
  };
  const handleClick2 = () => {
    navigate("./register");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img src={PF + "logo.png"} alt="" className="logo" />
        </Link>
        {user ? (
          <Link
            to={`/profile/${user.username}`}
            style={{ textDecoration: "none" }}
          >
            <div className="NavUserProfile">
              <span className="UName">{user.username}</span>

              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/profile.jpg"
                }
                alt=""
                className="navBarImg"
              />
            </div>{" "}
          </Link>
        ) : (
          <div className="navItems">
            <button className="navButtonLogin" onClick={handleClick1}>
              Login
            </button>
            <button className="navButtonJoin" onClick={handleClick2}>
              Join
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
