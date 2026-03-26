import React, { useState, useEffect } from "react";


export default function App(){
  
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  // Mounting -> Updating -> Unmounting

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
    
  })

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}