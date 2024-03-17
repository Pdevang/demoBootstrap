import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import { About, Contact, Home, Services } from "../pages";
import { NavBar } from "../components";

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
