import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { BuildResume } from "./pages/buildResume/BuildResume";
import { CoursePage } from "./pages/coursePage/CoursePage";
import { CreateGigs } from "./pages/createGigPage/CreateGigs";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import { NewResume } from "./pages/newResume/NewResume";
import { Profile } from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import Upload from "./pages/upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/newResume" element={<NewResume />} />
        <Route path="/buildResume" element={<BuildResume />} />
        <Route path="/profile/:username/creategig" element={<CreateGigs />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
