import { useState } from "react";
import InputData from "./InputData";
import "./TodoApp.css";
import TodoItem from "./TodoItems";
import Message from "./Message";
import { useRef } from "react";
export default function TodoApp() {
  const [todoData, setTodoData] = useState([]);

  const handleNewTodo = (newTodo, newDate) => {
    setTodoData((currTodo) => [{ name: newTodo, date: newDate }, ...currTodo]);
    // setTodoData([...todoData, { name: newTodo, date: newDate }]);
  };
  const handleDelete = (todoName) => {
    const UpdatedTodoItems = todoData.filter((item) => item.name != todoName);
    setTodoData(UpdatedTodoItems);
  };
  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <InputData handleNewTodo={handleNewTodo} />
      </div>
      {todoData.length == 0 && <Message />}
      <TodoItem todoData={todoData} handleDelete={handleDelete} />
    </>
  );
}
