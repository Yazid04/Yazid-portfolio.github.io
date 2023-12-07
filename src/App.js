import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
