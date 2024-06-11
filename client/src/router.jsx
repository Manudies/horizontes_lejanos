import {createBrowserRouter,redirect} from "react-router-dom";
import { fetchProjects,fetchProject,fetchInvitations } from "./utils/fetch";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import TripCard from "./components/trip/tripCard";

// async function getProjects(){
//     const result = await fetchProjects();
//     if(result.error){
//         return redirect("/register");
//     }
//     return result.data;
// }
// async function getProject(id){
//     const result = await fetchProject(id);
//     if(result.error){
//         return redirect("/register");
//     }
//     return result.data;
// }
// async function getInvitations(){
//     const result = await fetchInvitations();
//     if(result.error){
//         return redirect("/register");
//     }
//     return result.data;
// }
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element:   <TripCard />
        },
        {
            path: "/projects",
            element: <ProjectsList />,
            loader: () => getProjects()
        },
        {
            path: "/projects/:id",
            element: <Project />,
            loader: ({params}) => getProject(params.id)
        },
      ]
    },
    {
        path: "/register",
        element: <Register />
    }
    
  ]);

export default router;