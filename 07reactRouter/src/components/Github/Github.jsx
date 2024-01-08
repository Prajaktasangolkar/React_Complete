import {useEffect,useState} from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
/* //1st method without loader 
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/prajaktasangolkar')
        .then(response=>response.json())
        .then(data=>{
           console.log(data);
           setData(data)
        } )
    },[])
*/
const data=useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}

export default Github


// another method for loader in main.jsx we use loader so that this function will be called
export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/prajaktasangolkar')
     return response.json()
}