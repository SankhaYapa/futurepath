import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src="./assets/logo.png" alt="" className="logo" />

        <div className="navItems">
          <button className="navButtonLogin">Login</button>
          <button className="navButtonJoin">Join</button>
        </div>
      </div>
    </div>
  );
};
