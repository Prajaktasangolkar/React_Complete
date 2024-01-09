import { createContext ,useContext} from "react";

export const ThemeContext=createContext({
    // inside this we can give variables & methods both
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider

// from project 08 UserContext.js and UserContextProvifer.jsx
// we took both of the file in 
////////////////custom hook/////////////////

export default function useTheme(){
    return useContext(ThemeContext)  
    /*
    import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

  const {setUser}=useContext(UserContext)
  here we want to insert both so insted of this use this 
    */ 
}