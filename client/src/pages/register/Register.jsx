import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const routeChange = () => {
    navigate("/login");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginBox">
            <form action="" className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Username"
                ref={username}
                className="loginInput"
                required
              />
              <input
                placeholder="Email"
                type="email"
                ref={email}
                className="loginInput"
              />
              <input
                placeholder="Password"
                ref={password}
                className="loginInput"
                required
                type="password"
              />
              <input
                placeholder="Password Again"
                ref={passwordAgain}
                className="loginInput"
                required
                type="password"
              />
              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <button className="loginRegisterButton" onClick={routeChange}>
                Log into Account
              </button>
            </form>
          </div>
        </div>
        <div className="loginRight"></div>
      </div>
    </div>
  );
}
