import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNave from "../components/layout-component/RightNave";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
                <section >
                   
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2 "><Navbar></Navbar></nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="left col-span-3"><LeftNavbar/></aside>
            <section className="col-span-5"> <Outlet/></section>
            <aside className="col-span-3"><RightNave/></aside>

            </main>
        </div>
    );
};

export default HomeLayout;