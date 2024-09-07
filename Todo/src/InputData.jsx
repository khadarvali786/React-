import { useState,useRef } from "react";

export default function InputData({ handleNewTodo }) {
    //using state
  //   const [todo, setTodo] = useState("");
  //   const [date, setDate] = useState("");

  //   const handleDate = (e) => {
  //     setDate(e.target.value);
  //   };
  //   const handleTodo = (e) => {
  //     setTodo(e.target.value);
  //   };

  //   const handleSubmit = () => {
  //     handleNewTodo(todo, date);
  //     setDate("");
  //     setTodo("");
  //   };

  //using ref
  const todoName = useRef();
  const todoDate = useRef();

  const handleSubmit = () => {
    var todo = todoName.current.value;
    var date = todoDate.current.value;
    handleNewTodo(todo, date);
    todoName.current.value = "";
    todoDate.current.value = "";
  };
  return (
    <>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Todo"
        // value={todo}
        // onChange={handleTodo}
        ref={todoName}
        required
      />
      <input
        type="date"
        name="date"
        id="date"
        required
        // value={date}
        // onChange={handleDate}
        ref={todoDate}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
