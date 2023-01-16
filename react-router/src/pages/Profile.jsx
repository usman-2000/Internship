import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Name: Usman Rahim</h1>
      <h1>Father Name: Abdul Rahim</h1>
      <h1>Age: 22 years</h1>

      <footer>
        <button onClick={() => navigate("/")}>Go to App</button>
      </footer>
      <Outlet />
    </div>
  );
}
