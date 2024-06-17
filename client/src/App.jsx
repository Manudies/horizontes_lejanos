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
import UserContext from './context/userContext'
import { fetchUserData } from './utils/fetch';
import { deleteToken } from './utils/local.js';

function App() {
  const [user, setUser] = useState(null);
      useEffect(() => {
        handlefetchUserData()
    }, [])

  async function handlefetchUserData() {
    const result = await fetchUserData();
    console.log("user",result)
    if (result.error) {
      return null;
    }
    setUser(result.data); 
  }
  const logOut = () => {
    deleteToken()
    setUser(null)

  }
  

  return (
    <>

        <UserContext.Provider value={{user, handlefetchUserData, logOut}}>
          <RouterProvider router={router} />
        </UserContext.Provider>

    </>
  )
}

export default App