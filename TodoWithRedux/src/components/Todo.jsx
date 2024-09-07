import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { toggleTodo,deleteTodo } from "../Features/Todo/todoSlice";

export default function Todo(){
    var todo = useSelector((state)=>state.todo);
    const dispatch = useDispatch();
    console.log(todo);
    const markAsDone=(id)=>{
        dispatch(toggleTodo(id));
    }
    const deleteAllTasks =()=>{
        dispatch(deleteTodo());
    }
    return(
        <>
        <h1>Todo Taks</h1>
        <AddForm />
        <ul>
            {todo.map((item)=>(<li  onClick={()=>markAsDone(item.id)} style={(item.isDone)?{textDecoration:"line-through"}:{}} key={item.id} >{item.task}</li>))}
        </ul>
        <button onClick={deleteAllTasks} >Delete all completed tasks</button>
        </>
    )
}