import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";
export default function TodoList() {
  const [todo, setTodo] = useState([
    { task: "Start New Step", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addnewTask = (event) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
    event.preventDefault();
  };
  const updateNewToDo = (event) => {
    setNewTodo(event.target.value);
  };
  const deleteTask = (id) => {
    setNewTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
      })
    );
    // setTodo((prevTodo)=>{
    //     return prevTodo.filter((todo)=>todo.id!==id)
    // });
  };

  const reset = () => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.isDone === false);
    });
  };

  return (
    <>
      <div className="todo-list">
        <form action="" onSubmit={addnewTask}>
          <input
            type="text"
            name=""
            id=""
            value={newTodo}
            onChange={updateNewToDo}
            required
          />
          <br />
          <br />
          <button>Add Task</button>
        </form>
        <br />
        <br />
        <h3>Todo List</h3>
        <ul>
          {todo.map((todo) => (
            <>
              <li
                key={todo.id}
                onClick={() => deleteTask(todo.id)}
                style={
                  todo.isDone
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo.task}
              </li>{" "}
            </>
          ))}
        </ul>
      </div>
      <button onClick={reset}>Remove Completes tasks</button>
    </>
  );
}
