import Index from "./views/Home/index";
import About from "./views/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
