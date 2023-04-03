// jshint esversion:6
import { Outlet } from "react-router-dom";

function HomeLayout() {

    return (
        <>
            <nav className="hidden fixed top-0 inset-x-0 h-[50px] px-8 md:flex justify-between items-center bg-[white] shadow-md z-10">
                <h1 className="text-underline text-[black] font-bold">3racker</h1>
            </nav>

            {/* Render Outlet here */}
            <div className="fixed inset-0 overflow-y-auto">
                <Outlet />
            </div>
        </>
    );

}
export { HomeLayout };
