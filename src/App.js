import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Homepage, About, Projects, Contact, Resume } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <BrowserRouter basename="/Nathan-Shaw-Portfolio-2025">
        <div className="App min-w-svw min-h-svh flex flex-col bg-gradient-to-tr from-slate-900 to-neutral-500 bg-fixed  overflow-y-hidden "
    >
      <Router>
        <Navbar />
        <div className="flex flex-grow w-full ml-auto mr-auto ">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    </BrowserRouter>

  );
}

export default App;
