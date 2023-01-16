import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SecondPage(props) {
  const [arealocation, setLocation] = useState();
  const [designation, setDesignation] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  const [validate, setValidate] = useState(false);

  const fn = () => {
    setValidate(true);
  };
  return (
    <div>
      <label>Location</label>
      <input type="text" onChange={(e) => setLocation(e.target.value)} />
      <label>Designation</label>
      <input type="text" onChange={(e) => setDesignation(e.target.value)} />

      <button onClick={fn}>Submit</button>

      <div>
        <h2>{validate ? "Name: " + data : ""}</h2>
        <h2>{validate ? "Location : " + arealocation : ""}</h2>
        <h2>{validate ? "Designation : " + designation : ""}</h2>
      </div>
    </div>
  );
}
