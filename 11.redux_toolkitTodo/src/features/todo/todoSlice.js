import {createSlice,nanoid} from '@reduxjs/toolkit'; // nanoid create the unique id

// starting store will be empty or ...
const initialState={
    //object
    todos:[{id:1,text:"Hello World"}]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //reducer will not only right the reference but also
        //write the function in this

        // ++++++s tate,action ++++++ always have access of this both 
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer

