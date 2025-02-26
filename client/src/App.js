import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, About, Projects, Contact, Resume } from "./pages";
import { Navbar, Footer } from "./components";
import { bgDarthStripe } from "./images";

function App() {
  return (
    <div className="App min-w-svw min-h-svh flex flex-col bg-neutral-800"
    style={{
      backgroundImage: `url(${bgDarthStripe})`
    }}
    >
      <Router>
        <Navbar />
        <div className="grow w-10/12 ml-auto mr-auto bg-white">
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
  );
}

export default App;
