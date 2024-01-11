
import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {

  //loading state --> so conditional rendering will be easy with datastore
  //like if loading is true --> show loading icon i loading is false show the data
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

   useEffect(()=>{
     authService.getCurrentUser()
     .then((userData)=>{
         if (userData){
          dispatch(login({userData}))
         }
         else{
          dispatch(logout())
         }
     })
     .finally(()=>setLoading(false))
   },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          TODO:{/* outlet */}<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
