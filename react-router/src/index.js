import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Blogpost from "./pages/Blogpost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Layout" element={<Layout />}>
          <Route path="/Layout/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/Blogpost/:id" element={<Blogpost />} />
    </Routes>
  </BrowserRouter>
);
