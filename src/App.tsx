import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "./views/navBar";
import Footer from "./views/footer";

const HomeIndex = React.lazy(() => import("./views/Home/index"));
const AboutIndex = React.lazy(() => import("./views/About/About"));
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div> Loading....</div>}>
                <HomeIndex />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div> Loading....</div>}>
                <AboutIndex />
              </Suspense>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
