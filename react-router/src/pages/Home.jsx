import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Home Page</h1>
      <footer>
        <button onClick={() => navigate(-1)}>Go back</button>
      </footer>
    </div>
  );
}
