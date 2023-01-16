import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Layout</li>
      </ul>
      <footer>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </footer>
      <footer>
        {/* <Link to="/Layout/profile">Profile</Link> */}
        <button onClick={() => navigate("/Layout/profile")}>Profile</button>
      </footer>
      <Outlet></Outlet>
    </div>
  );
}
