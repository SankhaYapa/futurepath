import { useContext } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { Gig } from "./components/gig/Gig";
import { AuthContext } from "./context/AuthContext";
import { BuildResume } from "./pages/buildResume/BuildResume";
import { CareerAdvice } from "./pages/careerAdvice/CareerAdvice";
import { CoursePage } from "./pages/coursePage/CoursePage";
import { CreateGigs } from "./pages/createGigPage/CreateGigs";
import { Home } from "./pages/home/Home";
import { Jobs } from "./pages/jobs/Jobs";
import Login from "./pages/login/Login";

import { NewResume } from "./pages/newResume/NewResume";
import { Profile } from "./pages/profile/Profile";
import { Career } from "./pages/recommendation/Career";
import Register from "./pages/register/Register";
import { SingleGigPage } from "./pages/singleGigPage/SingleGigPage";


import UploadResume from "./pages/uploadResume/UploadResume";

function App() {
  const {user}=useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={user?<Home />:<Register></Register>} />
      <Route path="/login" element={user?<Home />:<Login />}></Route>
      <Route path="/register" element={user?<Home />:<Register/>}></Route>
      <Route path="/uploadResume" element={<UploadResume   />}></Route>
      <Route path="/uploadResume/newResume" element={<NewResume />} />
      <Route path="/uploadResume/buildResume" element={<BuildResume />} />
      <Route path="/profile/:username/creategig" element={<CreateGigs />} />
      <Route path="/profile/:username/singlepagegig/:id" element={<SingleGigPage />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/profile/:username/course/:id" element={<CoursePage />} />
      <Route path="/recommendation" element={<Career/>} />
      <Route path="/jobs" element={<Jobs/>} />
      <Route path="/careerAdvice" element={<CareerAdvice/>} />
      {/* <Route
          path="/messanger"
          element={user ? <Messanger /> : <Register />}
        ></Route> */}
      </Routes>
    </BrowserRouter> 
);
}

export default App;
