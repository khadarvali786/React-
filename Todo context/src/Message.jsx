import { useContext } from "react";
import styles from "./message.module.css";
import { TodoItemContext } from "./store/todoItems-store";

export default function Message() {
  const { todoData } = useContext(TodoItemContext);
  return (
    <>
      {todoData.length == 0 && (
        <p className={styles.welcome}>Do HardWork..No Shortcuts... </p>
      )}
    </>
  );
}
