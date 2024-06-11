import { useState, useEffect } from 'react'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import UserContext from './context/userContext'
import './App.css'
import Footer from './components/footer/footer';  

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log("user",user);
  },[user]);
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
      <Footer/>
    </>
  )
}

export default App
