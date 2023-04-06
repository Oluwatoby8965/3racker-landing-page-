// jshint esversion:6
import { Logo } from "../../logo";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface AsideNavigationProps {
  toggle: () => void;
}

function AsideNavigation({ toggle }: AsideNavigationProps) {
  return (
    <>
      <div className="w-full h-full pt-5 bg-[white]">
        <div className="px-4 flex justify-between gap-x-2">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="cursor-pointer" onClick={toggle}>
            <AiOutlineClose size={25} color={"#333333"} />
          </div>
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
          <NavLink className="font-bold text-linkPry" to="/auth">
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
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
