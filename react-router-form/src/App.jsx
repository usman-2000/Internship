import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate("/firstpage")}>Start</button>
    </div>
  );
}

export default App;
