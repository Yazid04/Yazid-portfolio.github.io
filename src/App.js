import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { useEffect } from "react";
import Contact from "./pages/Contact";

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = '#121515';
  })

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
