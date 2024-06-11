import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'


function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>

        <h1>Welcome to the Trip Planner</h1>

    </>
  )
}

export default App