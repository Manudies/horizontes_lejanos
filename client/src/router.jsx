import { createBrowserRouter, redirect } from "react-router-dom";

import {
  getTrips,
  getUsers,
  getByProperty,
  fetchUserData,
} from "./utils/fetch";

import Register from "./pages/register/Register";
import ErrorPage from "./pages/ErrorPage";

import Root from "./pages/Root";

import TripsList from "./pages/trips/tripList";
import UserList from "./pages/User/UserList";
import Bienvenida from "./components/bienvenida/bienvenida";

async function fetchTrips() {
  const result = await getTrips();
  console.log("result de fetch", result);
  if (result.error) {
    return redirect("/register");
  }
  return result.data;
}

async function fetchUsers() {
  const result = await getUsers();
  if (result.error) {
    return redirect("/register");
  }
  return result.data;
}

async function fetchTripsByProperty(destino) {
  const result = await getByProperty(destino);
  if (result.error) {
    return redirect("/register");
  }
  return result.data;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: () => handleUserData(),
    children: [
      {
        path: "/",
        element: <Bienvenida />,
      },
      {
        path: "/trips",
        element: <TripsList />,
        loader: () => fetchTrips(),
      },
      {
        path: "/trips/:tripDestino",
        element: <TripsList />,
        loader: ({ params }) => fetchTripsByProperty(params.tripDestino),
      },
      {
        path: "/users",
        element: <UserList />,
        loader: () => fetchUsers(),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],

  }

]);

export default router;
