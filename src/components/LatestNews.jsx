import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-3 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-2">Latest</p>
            <Marquee pauseOnHover ={true}className="space-x-10">
                <Link to="/news"> Highlights: Hero Alam's new friend is Moksedul, Their new movie is coming out</Link>
                <Link to="/news">Match Highlights: Hero Alam's new friend is Moksedul, Their new movie is coming out</Link>
                <Link to="/news">Match Highlights: Hero Alam's new friend is Moksedul, Their new movie is coming out</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;