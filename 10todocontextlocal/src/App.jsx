
import './App.css'
import {useState,useEffect} from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
 const [todos,setTodos]=useState([])
 const addTodo=(todo)=>{ //from state this todo will come
    // this todo will go inside todos array but what if there is empty array
    // setTodos((prev)=>[todo,...prev])

    // +++++this is done bez we want previous todos+new with unique id that is with date it will be added
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }

 const updatedTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>(
        prevTodo.id===id? todo:prevTodo //if id match then new todo if not then prevTodo as it is
  )))
 }
 
 /*
 prev.map((eachVal)=>{
  if (eachVal.id===id){
    todo
  }
 })
 */

//  whidh is == it will not come in todo 
 const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}

// when check it will became true
const toggleComplete=(id)=>{
setTodos((prev)=>prev.map(
  (prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo
  ));
}
useEffect(() => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    const todos = JSON.parse(storedTodos);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }
}, []);


// useEffect(()=>{
//    const todos= JSON.parse(localStorage.getItem("todos"))
   
//    if (todos && todos.length >0){ //not empty
//       setTodos(todos)
//    }
// },[])  //we can add in [todos] and get all the things but it will show if any changes done then it will do get for this again & again

//  so we want to save the changes if done so save in the localstorage

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos)) //only in string value want
},[todos])//here we will get getItem("todos") key and value and value want in the string only 




  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                            className='w-full'
                          >
                             <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>   
      </TodoProvider>
  )
}

export default App
