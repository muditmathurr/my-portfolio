import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import MyWork from './Components/MyWork';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;
