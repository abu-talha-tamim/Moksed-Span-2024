import Header from "../components/Header";
import LatestNews from "../components/LatestNews";


const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className="w-11/12 mx-auto">
                <LatestNews/>
            </section>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;