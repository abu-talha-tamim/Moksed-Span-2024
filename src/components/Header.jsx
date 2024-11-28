import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5 gap-3">
            <div className="logo">
                <img className="w-80" src={logo}alt="" />
            </div>
            <h2 className="text-gray-400 ">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;