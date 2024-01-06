import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime.js'

function MyApp() {
  return (
    <div>
         <h1>custom app!</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:"Click me to visit google"
// }

const anotherElement=(
  <a href="http://google.com" target="_blank" >visit google</a>

)

const anotherUser="chai aur react"
const reactElement=React.createElement(
  // tags
  // objects
  // object (not if else there )bez it is evaluate expression
  'a',
  {href:'https://google.com',target:'_blank'},
  "Click me to visit google",
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
   /*
     reactElement
    // anotherElement
    // ReactElement

    //  <MyApp />   
    // MyApp() 
    */
    reactElement
  //  <App/>
 

)
