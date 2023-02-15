import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChatOnlineF from "../../components/chatOnline/ChatOnlineF";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./Messanger.css";
import axios from "axios";
import { useRef } from "react";
import { io } from "socket.io-client";
import { Call, Search, VideoCall } from "@mui/icons-material";
export default function Messanger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const [arrivalMessages, setArrivalMessages] = useState(null);
  const [onlineUsers, setonlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    // setSocket(io("ws://localhost:8900"));
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessages({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessages &&
      currentChat?.members.includes(arrivalMessages.sender) &&
      setMessages((prev) => [...prev, arrivalMessages]);
  }, [arrivalMessages, currentChat]);
  // useEffect(() => {
  //   socket?.on("Welcome", (message) => {
  //     console.log(message);
  //   });
  // }, [socket]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setonlineUsers(
        user.followins.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  // console.log(socket);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversation/" + user._id);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getConversations();
  }, [user._id]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat._id);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessages,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessages,
    });
    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessages("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      <div className="chatTextWrapper">
        <span className="ChatText">Chats</span>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <div className="chatGiderImageContainer">
            <img
              className="chatGiderImage"
              src={PF + "tour-guide.png"}
              alt=""
            />

            <span>Online Guiders</span>
          </div>
          <ChatOnlineF
            onlineUsers={onlineUsers}
            currentId={user._id}
            setCurrentChat={setCurrentChat}
          />
        </div>
      </div>
      <hr className="hrr" style={{ color: "red" }}></hr>
      <div className="Messanger">
        <div className="chatMenu">
          <div className="chatMenuWrraper">
            <div className="chatMenuSearch">
              <input
                type="text"
                placeholder="Search Guiders"
                className="chatMenuInput"
              />
            </div>
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="callBar">
              <img src="" alt="" />
              <Call className="CallBarIcon" sx={{ fontSize: 28 }}></Call>
              <VideoCall
                className="CallBarIcon"
                sx={{ fontSize: 28 }}
              ></VideoCall>
            </div>
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={m.sender === user._id}
                        currentUser={user}
                        setCurrentChat={setCurrentChat}
                      />
                    </div>
                  ))}
                </div>

                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Write something.."
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessages}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversation">
                Open a conversation to start chat
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
