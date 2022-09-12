import { useState } from "react";
import { Button } from "./components/Button";
import Home from "./views/Home";
import About from "./views/About";
import Error from "./views/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import NAVBAR from "./views/NAVBAR";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NAVBAR />} />
          <Route path="/about" element={<About />} />
          <Route element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
