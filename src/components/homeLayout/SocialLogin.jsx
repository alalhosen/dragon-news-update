import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login With</h2>
      <div className="space-y-3">
        <div>
          <button className="btn w-full btn-outline btn-secondary justify-center items-center">
            <FcGoogle size={20}></FcGoogle>
            Login With Google
          </button>
        </div>
        <button className="btn w-full btn-outline btn-primary"> 
            <FaGithub className="text-xl"></FaGithub>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
