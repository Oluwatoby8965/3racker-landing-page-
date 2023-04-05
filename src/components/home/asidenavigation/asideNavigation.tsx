// jshint esversion:6
import { Logo } from "../../logo";
import { NavLink } from "react-router-dom";

function AsideNavigation() {
  return (
    <>
      <div className="w-full h-full pt-5 bg-[white]">
        <div className="pl-4">
          <Logo />
        </div>

        {/* Navigation menu */}
        <div className="mt-5 flex flex-col">
          <NavLink
            to="/products"
            className="text-base pl-4 py-2 border-b-[1px] border-b-gray-200"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="text-base pl-4 py-2 border-b-[1px] border-b-gray-200"
          >
            About
          </NavLink>
          <NavLink
            to="/support"
            className="text-base pl-4 py-2 border-b-[1px] border-b-gray-200"
          >
            Support
          </NavLink>
          <NavLink to="/pricing" className="text-base pl-4 py-2">
            Pricing
          </NavLink>
        </div>

        <div className="mt-5 flex flex-col gap-y-3 items-start px-4">
          <p className="font-bold text-linkPry">Sign In</p>
          <NavLink
            to={"/auth/signup"}
            className="w-full text-center outline-0 bg-[#7451F6] px-3 py-2 text-[white] font-bold rounded"
          >
            Get Started Free
          </NavLink>
        </div>
      </div>
    </>
  );
}

export { AsideNavigation };
