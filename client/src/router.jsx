import {createBrowserRouter, redirect} from "react-router-dom";

import { getTrips, getUsers } from "./utils/fetch";


import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";

import Root from "./pages/Root";

import TripsList from "./pages/trips/tripList";
//import UserList from "./pages/User/UserLIst";


async function fetchTrips(){
  const result = await getTrips();
  console.log("result de fetch", result)
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

async function fetchUsers(){
  const result = await getUsers();
  if(result.error){
    return redirect ("/register")
  }
  return result.data;
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        /* {
          path: "/",
          element: <div>Bienvenidos a Horizontes lejanos!</div>,
        }, */
        {
          path: "/trips",
          element: <TripsList />,
          loader: () => fetchTrips()
        },
         {
          path: "/users",
          element: <UserList />,
          loader: () => fetchUsers()
        },
        {
          path: "/register",
          element: <Register />
      },         
      ]
    },

 
  
  ]);

  export default router