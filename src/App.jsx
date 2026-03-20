import './App.css'
import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import { Routes, Route, Link } from 'react-router-dom';




export default function App() {

  return ( 
    <div> 
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>

        <Route path="*" element={<h1 style={{padding: "0 .15rem"}}>Not Found</h1>} />
      </Routes>
    

    </div>
  );
}

function Navbar(){
  
  return (
    <div>
      <header style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between"
      }}>

        <nav style={{display: "flex", gap: "1rem"}}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        
        <div>
          <Link to="/login">Login</Link>
        </div>

      </header>
    </div>
  )
}

function HomePage(){
  return (
    <div style={{padding: "0 1.5rem"}}>
      <h1>HOME</h1>

      <p>You are not logged in. Go to the login page to sign in.</p>
    </div>
  )
}

function ProfilePage(){

  return (
    <div style={{padding: "0 1.5rem"}}>

      <h1>PROFILE PAGE</h1>
      <p>Name: [name here]</p>
      <p>Here you could show user info from the context</p>
    </div>
  )

}

function LoginPage(){

}




// BASIC ROUTING
// function App() {

//   return (

//     <div> 

//       <nav style={{display: 'flex', gap: "1rem", marginBottom: "1rem"}}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<HomePage />}/>
//         <Route path="/about" element={<AboutPage />}/>
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>

//       <div>Footer</div>

//     </div>
//   );
// }



function AboutPage(){
  return <h1>ABOUT PAGE</h1>
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


// export default App
