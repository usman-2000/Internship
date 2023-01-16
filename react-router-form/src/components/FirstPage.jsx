import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function FirstPage() {
  const [firstName, setFirstName] = useState({});
  //   const [age, setAge] = useState(0);

  const navigate = useNavigate();
  // const [validate, setValidate] = useState(false);
  return (
    <div>
      <label>Name</label>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      {/* <label>Age</label>
      <input type="number" onChange={(e) => setAge(e.target.value)} /> */}
      {/* <button onClick={() => navigate("/secondpage")>Next</button> */}
      <Link to="/secondpage" state={{ data: firstName }}>
        Next
      </Link>
    </div>
  );
}
