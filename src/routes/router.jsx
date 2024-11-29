import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";



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
        ]
    },
    {
        path: "/news",
        element: <h1>news</h1>
    },
    {
        path: "/auth",
        element: <h1>News Login</h1>,
    },
    {
        path: "*",
        element: <h1>Error on this page</h1>,
    }
])

export default router;