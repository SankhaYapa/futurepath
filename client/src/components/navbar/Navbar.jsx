import "./navbar.css";

export const Navbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="navbar">
      <div className="navContainer">
        <link to={"/"}></link>
        <img src={PF + "logo.png"} alt="" className="logo" />

        <div className="navItems">
          <button className="navButtonLogin">Login</button>
          <button className="navButtonJoin">Join</button>
        </div>
      </div>
    </div>
  );
};
