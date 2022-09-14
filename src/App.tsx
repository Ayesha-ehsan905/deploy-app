import Index from "./views/Home/index";
import About from "./views/About/About";
import Error from "./views/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
