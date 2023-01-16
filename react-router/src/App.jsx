import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>This is main app</h1>
      <footer>
        <Link to="/Contact">Contact Us</Link>
      </footer>
      <footer>
        <Link to="/Home">Home</Link>
      </footer>
      <footer>
        <Link to="/Layout">Layout</Link>
      </footer>
      <footer>
        <Link to="/Blogpost">Blogpost</Link>
      </footer>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
