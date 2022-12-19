import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
