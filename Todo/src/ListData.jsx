import "./ListData.css";
export default function ListData({ todoName, todoDate, onClickDelete }) {
  return (
    <>
      <div className="ListData">
        <p>{todoName}</p>
        <p>{todoDate}</p>
        <button onClick={() => onClickDelete(todoName)}>Delete</button>
      </div>
    </>
  );
}
