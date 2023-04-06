// jshint esversion:6
import { Outlet } from "react-router-dom";
import { Logo } from "../../components";
import { AsideNavigation } from "../../components/home";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function HomeLayout() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <nav className="fixed top-0 inset-x-0 md:inset-x-[3vw] h-[80px] px-8 flex justify-between items-center bg-[white] shadow-md z-10">
                <NavLink to="/">
                    <Logo />
                </NavLink>

                {/* Desktop Nav Menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-x-4 lg:gap-x-7 items-center">
                        <li className="text-linkPry text-base lg:text-lg font-bold">
                            <a href="products">Products</a>
                        </li>
                        <li className="text-linkPry text-base lg:text-lg font-bold">
                            <a href="about">About</a>
                        </li>
                        <li className="text-linkPry text-base lg:text-lg font-bold">
                            <a href="support">Support</a>
                        </li>
                        <li className="text-linkPry text-base lg:text-lg font-bold">
                            <a href="pricing">Pricing</a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden cursor-pointer" onClick={handleToggleNav}>
                    {navOpen ? (
                        <AiOutlineClose size={25} color={"#333333"} />
                    ) : (
                        <AiOutlineMenu size={25} color={"#333333"} />
                    )}
                </div>

                {/* Auth - SignUp | SignIn */}
                <div className="hidden md:flex gap-x-3 items-center">
                    <NavLink className="font-bold text-linkPry" to="/auth">Sign In</NavLink>
                    <NavLink
                        to={"signup"}
                        className="outline-0 bg-[#7451F6] px-3 py-2 text-[white] font-bold rounded"
                    >
                        Get Started Free
                    </NavLink>
                </div>
            </nav>

            {/* Aside Navigation */}
            <div
                className={`md:hidden fixed inset-y-0 w-[200px] transition-all ease-in delay-[100ms] z-10 ${navOpen ? "right-0" : "-right-full"
                    } `}
            >
                <AsideNavigation toggle={handleToggleNav} />
            </div>

            {/* Render Outlet here */}
            <div className="fixed inset-0 overflow-y-auto z-0">
                <Outlet />
            </div>
        </>
    );
}
export { HomeLayout };
