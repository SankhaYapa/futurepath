import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messanger from "./pages/messanger/Messanger";
import Hotel from "./pages/hotel/Hotel";

import { Hotels } from "./pages/list/Hotels";
import { Chat } from "./pages/chat/Chat";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route
          path="/messanger"
          element={user ? <Messanger /> : <Register />}
        ></Route>
        <Route
          path="/chat"
          element={user ? <Chat /> : <Register />}
        ></Route>
        <Route path="/hotel" element={<Hotels></Hotels>}/>
        <Route
          path="/hotel/:id"
          element={user ? <Hotel /> : <Register />}
        ></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
