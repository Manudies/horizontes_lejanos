import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';  
import TripCard from './components/trip/tripCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>
        <Navbar/>
        <h1>Welcome to the Trip Planner</h1>
        <TripCard />
        <Footer/>
    

    </>
  )
}

export default App