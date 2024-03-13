import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <hr />
      <ToDoBody />
      <ToDoFooter />
    </div>
  );
}

function ToDoHeader() {
  return <div className="todo-header"></div>;
}

function ToDoBody() {
  const [toDoValue, setToDoValue] = useState(null);
  const [toDo, setToDo] = useState([{ toDoValue: "tester", id: 0 }]);

  function handleOnChange({ target }) {
    setToDoValue(() => target.value);
  }

  function handleSubmit(e) {
    setToDo((prev) => [...prev]);
    e.preventDefault();
  }

  return (
    <div className="todo-body">
      <InputToDo onChange={handleOnChange} toDoValue={toDoValue} />
      <Todos toDos={toDo} />
    </div>
  );
}
function InputToDo({ onChange, toDoValue }) {
  return (
    <>
      <form>
        <input onChange={onChange} value={toDoValue} />
      </form>
    </>
  );
}

function Todos({ toDos }) {
  return (
    <ul className="todo-list-container">
      {toDos.map((todo) => (
        <li key={todo.id}>{todo.toDoValue}</li>
      ))}
    </ul>
  );
}

function ToDoFooter() {
  return <div className="todo-Footer"></div>;
}

export default App;
