import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold md-3 mb-4">Login with</h1>
            <div className="w-full space-y-2 ">
                <button className="btn text-green-800 border-green-500"><FaGoogle />Login with Google</button>
                <button className="btn border-green-500"> <FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;