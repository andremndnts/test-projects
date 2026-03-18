import './App.css'
import { useState } from 'react';

function App() {

  const workout = Muscle();
  const name = "Erand";
  const age = 24;
  const greeting = "Good morning babyy! how's your sleep?";

  // const showGreeting = false;

  const [showGreeting, setShowGreeting] = useState(false);

  function toggleButtonGreeting(){

    if (showGreeting) {
      setShowGreeting(false);
    }else{
      setShowGreeting(true);
    }
  }


  return (
    <div> 
    
        <button onClick={toggleButtonGreeting}>Click Me</button>
        

        {showGreeting &&
          <Greeting message={"Hi baby"} sender={"Erand"}/> 
        }


        {/* < Greeting message={"Good morning"} sender={"Anonymouse"}/>
        < Greeting message={"How's your sleep?"} sender={"KUYA"}/>
        < Greeting message={"Nice"} sender={"BOI"}/> */}

    </div>
  )
}


function Muscle(){
  return "Triceps";

}

function Greeting({message, sender}){

  return (
    <div>
      <h2>Hi! {message} from {sender}</h2>
    </div>        
  )
}


export default App
