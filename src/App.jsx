import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss";
import StateWise from './header';



function App() {
const [state, setState] = useState(true)


  // useEffect(() => {
  //   console.log(count);
    
  // },[])

 
  return (
    <>
    <div>

 <button onClick={e => setState(!state)} className='m-2 rounded-xl p-2 flex border-2 float'>Toggle</button>
 
      {state ? <StateWise/> : "" }
    
    </div>
    </>
  )
}

export default App