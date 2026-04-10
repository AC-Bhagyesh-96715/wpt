import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <h2>React Router Demo</h2>

      {/* 🔹 Static Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* 🔹 Dynamic Navigation Links */}
      <h4>Users:</h4>
      <Link to="/user/101">User 101</Link> |{" "}
      <Link to="/user/102">User 102</Link>

      <hr />

      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Route */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
