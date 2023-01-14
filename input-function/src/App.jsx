import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState();
  const [todosList, setTodosList] = useState([]);

  function addTodo() {
    todosList.push(todos);
    setTodosList([...todosList]);
    document.getElementById("inputField").value = "";
    // console.log(todosList);
  }

  function deleteAll() {
    setTodosList([]);
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        id="inputField"
        type="text"
        placeholder="Enter todo"
        onChange={(e) => setTodos(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteAll}>DeleteAll</button>

      <ul>
        {todosList.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
