import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Error404 from "../Pages/Error404";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/projects/:id",
            element: <ProjectDetails></ProjectDetails>
        },
        {
            path: "*",
            element: <Error404></Error404>
        }
    ]
  },
]);