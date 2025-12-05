import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Experience from "../Pages/Home/Experience";
import Projects from "../Pages/Home/Projects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact";
import Error404 from "../Pages/Error404";
import Services from "../Components/Services";
import Skills from "../Components/Skills";

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
            path: "/experience",
            element: <Experience></Experience>
        },
        {
            path: "/projects",
            element: <Projects></Projects>
        },
        {
            path: "/projects/:id",
            element: <ProjectDetails></ProjectDetails>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/skills",
            element: <Skills></Skills>
        },
        {
            path: "/service",
            element: <Services></Services>
        },
        {
            path: "*",
            element: <Error404></Error404>
        }
    ]
  },
]);