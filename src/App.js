import { Form } from "./components/Form";
import { Table } from "./components/Table/Table";
import { useState } from "react";

function App() {
  const Todos = JSON.parse(localStorage.getItem("todos")) || [];
  let [todos, setTodos] = useState(Todos);

  const check = (id) => {
    let checkTodo = todos.find((todo) => todo.id === id);
    checkTodo.fulfilled = !checkTodo.fulfilled;
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodo = (index) => {
    let newTodo = todos.filter((todo, i) => i !== index);
    setTodos(newTodo);
  };
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <Table todos={todos} removeTodo={removeTodo} check={check} />
    </>
  );
}

export default App;
