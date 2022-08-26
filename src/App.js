import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Host from "./pages/host/Host";
import Audience from "./pages/audience/Audience";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "/node_modules/framer-motion/dist/framer-motion";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/host" element={<Host />}></Route>
        <Route exact path="/audience/:id" element={<Audience />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
