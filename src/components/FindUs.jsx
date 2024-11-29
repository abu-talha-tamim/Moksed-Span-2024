import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import swimming from "../assets/swimming.png"



const FindUs = () => {
    return (
        <div>
            <h1 className="font-semibold mt-3 mb-4">Find Us On</h1>
            <div className="join flex join-vertical *:bg-base-100 gap-2 shadow-xl">
                <button className="btn  join- justify-start text-blue-800 shadow-xl "><FaFacebook/>Facebook</button>
                <button className="btn join- justify-start shadow-xl text-blue-800 "><FaTwitter/>Twitch</button>
                <button className="btn join- justify-start text-red-700"><FaInstagram/>Instagram</button>
            </div>
            <div className="p-3 mt-5">
                <p className="font-semibold">Q-ZONE</p>
            <img src={swimming}alt="" />
            </div>
        </div>
    );
};

export default FindUs;