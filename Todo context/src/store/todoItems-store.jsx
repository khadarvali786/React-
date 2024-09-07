import { createContext, useReducer } from "react";

export const TodoItemContext = createContext([]);

const todoReducer = (currTodo, action) => {
  let newTodoItem = currTodo;
  if (action.type == "ADD_TODO") {
    newTodoItem = [
      ...currTodo,
      { name: action.payload.newTodo, date: action.payload.newDate },
    ];
  } else if (action.type == "DELETE_TODO") {
    newTodoItem = currTodo.filter(
      (todoItem) => todoItem.name != action.payload.todoName
    );
  }
  return newTodoItem;
};

const TodoItemContextProvider = ({ children }) => {
  //Using Reducer
  const [todoData, dispatchTodoData] = useReducer(todoReducer, []);

  const handleNewTodo = (newTodo, newDate) => {
    dispatchTodoData({
      type: "ADD_TODO",
      payload: { newTodo, newDate },
    });
  };
  const handleDelete = (todoName) => {
    dispatchTodoData({
      type: "DELETE_TODO",
      payload: { todoName },
    });
  };
  //   const UpdatedTodoItems = todoData.filter((item) => item.name != todoName);
  //   setTodoData(UpdatedTodoItems);
  // };

  //Using UseState
  // const [todoData, setTodoData] = useState([]);

  // const handleNewTodo = (newTodo, newDate) => {
  //   setTodoData((currTodo) => [{ name: newTodo, date: newDate }, ...currTodo]);
  //   // setTodoData([...todoData, { name: newTodo, date: newDate }]);
  // };
  // const handleDelete = (todoName) => {
  //   const UpdatedTodoItems = todoData.filter((item) => item.name != todoName);
  //   setTodoData(UpdatedTodoItems);
  // };
  return (
    <TodoItemContext.Provider value={{ todoData, handleNewTodo, handleDelete }}>
      {children}
    </TodoItemContext.Provider>
  );
};
export default TodoItemContextProvider;
