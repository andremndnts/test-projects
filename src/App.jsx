import './App.css'
import { useState } from 'react';
import SignUpForm from './components/SignUpForm';

function App() {

  return (

    <div> 
  
    </div>
  )
}






// =========================== PREVIOUS TESTS HERE =============
// function App() {

//   // const workout = Muscle();
//   // const name = "Erand";
//   const age = 24;
//   const greeting = "Good morning babyy! how's your sleep?";

//   const [showGreeting, setShowGreeting] = useState("");

//   const [name, setName] = useState(""); 

//     // function toggleButtonGreeting(){

//     //   if (showGreeting) {
//     //     setShowGreeting(false);
//     //   }else{
//     //     setShowGreeting(true);
//     //   }
//     // }

//     // function handleChange(event){
//     //   const value = event.target.value;
//     //   // console.log(value);
//     //   setName(value);

//     // } 


//   return (

//     <div> 
     
//       < SignUpForm />

//       {/* < ToDoList/> */}
      
//       {/* <input type="text" placeholder="Enter password without typing" onChange={handleChange}/> */}

//       {/* useState sample usage */}

//         {/* <button onClick={toggleButtonGreeting}>Click Me</button> */}
//         {/* {showGreeting &&
//           <Greeting message={"Hi baby"} sender={"Erand"}/> 
//         } */}

//         {/* < Greeting message={"Good morning"} sender={"Anonymouse"}/>
//         < Greeting message={"How's your sleep?"} sender={"KUYA"}/>
//         < Greeting message={"Nice"} sender={"BOI"}/> */}

//     </div>
//   )
// }

// function ToDoList(){

//   const todos = [
//     {id: 1, text: "Eat Eggs"},
//     {id: 2, text: "Go to the gym"},
//     {id: 3, text: "Chat to baby, say i love you"}
//   ]

//   return (
//     <div>
//       <h2>TO DO LIST</h2>
//       <ul>
//         {todos.map((todo) => (

//           <li key={todo.id}>{todo.text}</li>

//         ))}
//       </ul>

//     </div>
//   ) 

// }


// function Muscle(){
//   return "Triceps";

// }

// function Greeting({message, sender}){

//   return (
//     <div>
//       <h2>Hi! {message} from {sender}</h2>
//     </div>        
//   )
// }


export default App
