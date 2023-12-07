import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = '#121515';
  })

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
