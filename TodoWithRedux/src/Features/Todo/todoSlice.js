import { createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todo:[{
        id:1,
        task:'Learn React',
        isDone:false
    }],  
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            var newTodo ={
                id:nanoid(),
                task:action.payload,
                isDone:false
            }
            state.todo.push(newTodo)
            },
        deleteTodo: (state,action) => {
            state.todo = state.todo.filter((todo) => todo.isDone === false)
            },
            toggleTodo: (state,action) => {
                state.todo = state.todo.map((todo) => todo.id === action.payload ? {...todo,isDone:!todo.isDone} : todo)
            }
        }
})
export const {addTodo,deleteTodo,toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;