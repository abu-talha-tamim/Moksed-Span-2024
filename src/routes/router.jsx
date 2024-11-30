import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ],
    },
    {
        path: "/news",
        element: <h1>news</h1>
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register/>
            },
        ],
    },
    {
        path: "*",
        element: <h1>Error on this page</h1>,
    }
])

export default router;