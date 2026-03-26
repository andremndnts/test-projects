import React, { useState, useEffect } from "react";


export default function App(){
  
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  // Mounting -> Updating -> Unmounting

  // resume tutorial @ 1:21:19 | https://www.youtube.com/watch?v=Wt3isV2irrA
  
  return(
    <div>
    
    <button onClick={() => setShowCounter(!showCounter)}>
      {" "} 
      Show counter
    </button>
    
    {showCounter && <Counter />}

    </div>
  )

}

function Counter(){

  const [count, setCount] = useState(0); 

  useEffect(() => {
    console.log("CUMM PONENT MOUNT");

      return () => {
        console.log("CUMM PONENT MOUNT");        
      }

  }, [])

  useEffect(() => {
    console.log("Component Updated bruh")
  }, [count])


  return <button onClick={() => setCount(count + 1)}>{count}</button>
}