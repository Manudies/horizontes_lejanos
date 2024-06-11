import { useState, useEffect } from 'react'
import './App.css'
import TripCard from './components/trip/tripCard'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>
        <h1>Welcome to the Trip Planner</h1>
        <TripCard />

    </>
  )
}

export default App
