import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user}= useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="">
                <div className="flex gap-2 items-center">
                    <img src={userIcon}alt="" />
                    <Link to="/auth/login" className="btn btn-neutral">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;