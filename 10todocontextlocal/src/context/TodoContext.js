import {createContext,useContext} from 'react';

export const TodoContext=createContext({
    // properties
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    // functionality here we write only name and there functionalities will will
    // be call and written in the App.jsx file
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})
export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}
