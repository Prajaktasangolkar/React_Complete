
import './App.css'
import Card from './components/card'

function App() {

  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3]
  return (
    /*
//this all is from tailwind
//     <>
//       <h1 className="bg-green-400 text-black p-4 rounded ">tailwind test</h1>
//       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//   <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/16453280/pexels-photo-16453280/free-photo-of-wild-eagle-sitting-on-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
//   <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p className="text-lg font-medium">
//         “Tailwind CSS is the only framework that Ive seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption className="font-medium">
//       <div className="text-sky-500 dark:text-sky-400">
//         Sarah Dayan
//       </div>
//       <div className="text-slate-700 dark:text-slate-500">
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>
//     </>
*/

<>
<h1 className="bg-green-400 text-black p-4 rounded mb-4">tailwind test</h1>

<Card username='chaiaurcode'  btnText='click me'/>
<Card username='hitesh' btnText='visit me'/>
</>
  )
}

export default App
