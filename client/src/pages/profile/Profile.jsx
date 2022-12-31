import "./profile.css";
import { Navbar } from "../../components/navbar/Navbar";
import { ProfileLeftBar } from "../../components/profileLeftBar/ProfileLeftBar";
import { ProfileRightBar } from "../../components/profileRightBar/ProfileRightBar";

export const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <Navbar></Navbar>
      <div className="profilePage">
        <ProfileLeftBar />
        <ProfileRightBar />
      </div>
    </div>
  );
};
