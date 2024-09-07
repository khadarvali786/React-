import InputData from "./InputData";
import "./TodoApp.css";
import TodoItem from "./TodoItems";
import Message from "./Message";
import TodoItemContextProvider from "./store/todoItems-store";

export default function TodoApp() {
  return (
    <>
      <h1>Todo App</h1>
      <TodoItemContextProvider>
        <div className="container">
          <InputData />
        </div>
        <Message />
        <TodoItem />
      </TodoItemContextProvider>
    </>
  );
}
