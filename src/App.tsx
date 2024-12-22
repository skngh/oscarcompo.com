import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Samples from "./pages/Samples";
import Cursor from "./components/Cursor";

function App() {
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/samples" element={<Samples />} />
      </Routes>
      {!isTouchDevice() && <Cursor />}
      <div className="credit">site by sam knight</div>
    </>
  );
}

// Resume: black screen middle of pages
// sample: looks like last onemptied
// contact: simple form
// simple back button with each page

export default App;
