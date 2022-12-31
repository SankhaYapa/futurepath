import "./login.css";

import { Link } from "react-router-dom";

export default function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="login">
      <div
        className="loginWrapper"
        style={{
          backgroundImage: `url(${PF + "background2.jpg"})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="loginLeft">
          <form className="loginBox" onSubmit="">
            <span className="SignInName">Sign In Now.</span>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton">"Sign In"</button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="loginRegister">
              <span className="notamem">Not a member?</span>
              <Link to={"/register"}>
                <button className="loginRegisterButton">
                  {/* {isFetching ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "Create a New Account"
                )} */}
                  Create a New Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
