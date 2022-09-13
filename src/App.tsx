import Home from "./views/Home/index";
import About from "./views/About";
import Error from "./views/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
