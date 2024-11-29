import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((res) => res.json())
        .then((data) => {
        
            setCategory(data.data.news_category)});
    }, []);



    return (
        <div>
           <h2 className="font-semibold "> All Category({Category.length})</h2>
           <div className="flex flex-col gap-4 mt-5  ">
                {
                    Category.map(category =>(
                        
                    <NavLink to={`/category/${category.category_id}`} className="btn hover:bg-purple-500 hover:text-white m border-gray-300 shadow-2xl" key={category.category_id}>{category.category_name}</NavLink>
                ))
                }
           </div>
        </div>
    );
};

export default LeftNavbar;