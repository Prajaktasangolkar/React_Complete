
import Chai from "./chai"

function App() {
  const username='chai aur code'
  return (  
   <>
    <Chai/>
    <h1>chai aur react {username}</h1>  
    {/* {username} this is evaluated expression where inside this we will write tha variable */}
    <p>test para</p>
   </>
  )
}

export default App
