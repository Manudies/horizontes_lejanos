import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"; 
import router from './router.jsx';

import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';  
import TripCard from './components/trips/tripCard.jsx'
import Register from './pages/register/Register.jsx';

import { getUsers, getTrips } from './utils/fetch';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);

  useEffect(()=>{
    fetchTrips();
    fetchUsers();
  },[]);
  
  async function fetchTrips(){
    const result = await getTrips();
    setTrips(result.data);
  }

  async function fetchUsers(){
    const result = await getUsers();
    setUser(result.data);
  }

  return (
    <>
        <RouterProvider router={router} />

    </>
  )
}

export default App