import { useState } from "react";
import { Button } from "./components/Button";
import Home from "./views/Home";
import About from "./views/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";



const App : React.FC = () =>{
  const navigate  = useNavigate();
  return (
    <>
     <Home></Home>
     
    </>
  );
}

export default App
