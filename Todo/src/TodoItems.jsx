import ListData from "./ListData";

export default function TodoItem({ todoData,handleDelete }) {
  return (
    <div>
      {todoData.map((item) => (
        <ListData todoName={item.name} todoDate={item.date} onClickDelete = {handleDelete} />
      ))}
    </div>
  );
}
