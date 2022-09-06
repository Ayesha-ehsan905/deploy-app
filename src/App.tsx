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

function App() {
  const navigate = useNavigate();
  return (
    <>
    <Button onClick={()=>navigate('/About')}>Go to Home Page</Button>
    
    <Button onClick={()=>navigate('/Home')}>Go to About Page</Button>
    <Routes>
      <Route path="/About" element={<About/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
    
    </>
  );
}

export default App
