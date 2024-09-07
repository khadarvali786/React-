import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleForminput = (event) => {
    setTask(event.target.value);
  };
  const handleForm = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <div className="form-group">
        <form onSubmit={handleForm}>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Taske"
            onChange={handleForminput}
            value={task}
          />
          <br />
          <br />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
}
