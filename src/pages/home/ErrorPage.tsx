import React from "react";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="bg-black h-screen text-white flex items flex-col 
     items-center justify-center text-4xl font-semibold gap-8"
    >
      <h1>Features coming soon</h1>
      <NavLink to="/">
        <AiFillHome size={70} />
      </NavLink>
    </div>
  );
};

export default ErrorPage;
