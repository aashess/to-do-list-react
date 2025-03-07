import { useEffect, useState } from 'react'
import './App.css'
import "tailwindcss";
import StateWise from './header';



function App() {
const [state, setState] = useState(true)

  return (
    <>
  
  


    <div>
        <StateWise/>
    </div>
    </>
  )
}

export default App