import { useContext } from "react";
import ListData from "./ListData";
import { TodoItemContext } from "./store/todoItems-store";

export default function TodoItem() {
  const {todoData,handleDelete} = useContext(TodoItemContext)
  return (
    <div>
      {todoData.map((item) => (
        <ListData todoName={item.name} todoDate={item.date} onClickDelete = {handleDelete} />
      ))}
    </div>
  );
}
