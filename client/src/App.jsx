import { useState, useEffect } from 'react'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'

import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>

        <RouterProvider router={router} />

    </>
  )
}

export default App
