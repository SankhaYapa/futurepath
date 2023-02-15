import "./Message.css";
import { format } from "timeago.js";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Message({ message, own, currentUser }) {
  const [friend, setFriend] = useState(null);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const friendId = message.sender;

    const getFreind = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setFriend(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFreind();
  }, [message]);

  return (
    <div className={own ? "Message own" : "Message"}>
      <div className="messagetop">
        <img
          src={own ? PF + friend?.profilePicture : PF + friend?.profilePicture}
          alt=""
          className="messageImg"
        />

        <p className="messageText">{message.text} </p>
      </div>
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}
