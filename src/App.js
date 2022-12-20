import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BuildResume } from "./pages/buildResume/BuildResume";
import { Home } from "./pages/home/Home";
import { NewRusume } from "./pages/newResume/NewRusume";
import Upload from "./pages/upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/newResume" element={<NewRusume />} />
        <Route path="/buildResume" element={<BuildResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
