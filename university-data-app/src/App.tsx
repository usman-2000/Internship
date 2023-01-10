import React, { useState, useEffect } from "react";
import "./App.css";
import ISchoolData from "./Components/types";
import StudentName from "./Components/student";

function App() {
  const [schoolData, setSchoolData] = useState<ISchoolData[]>([]);

  let apiURL: string = process.env.REACT_APP_API_URL ?? "";

  async function getDataFromAPI(url: string) {
    const response = await fetch(url);
    let data = await response.json();
    setSchoolData(data);
  }

  useEffect(() => {
    getDataFromAPI(apiURL);
  }, []);

  return (
    <div className="App">
      <StudentName schoolData={schoolData} />
    </div>
  );
}

export default App;
