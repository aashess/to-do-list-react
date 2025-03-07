import { useState,useEffect } from "react";






// console.log("This is another Function.");
export default function StateWise () {
    
    var [count,setCount] = useState(0)
    
    let counter = function(props) {
        if (props == "i") {
            setCount(count + 1)
            
        }
        else {
            setCount(count - 1)
            
        }
        
    }
    useEffect(() => {
        let random = Math.floor(Math.random()*10)
        console.log(`User Updated the Count ${random} `); // Runs only once when component mounts
    }, [count]);

    useEffect(() => {
        console.log("Started First Time.");
        
        return function () {
            console.log("UnMounted the whole Tab.");
            
        }
    },[])
    
    return (
        <>
       <div>
        <h1 className="flex p-1 mb-2">Counter: {count}</h1>
         <button onClick={() => counter("i")} className=" bg-green-500 m-2 rounded-xl p-2 flex border-2 float-left">Increase</button>
        <button onClick= {() => counter("d") }className=" bg-gray-500 m-2 border-2 flex rounded-xl p-2 float-left">Decrease</button>
        </div>
        </>
    )
    
}