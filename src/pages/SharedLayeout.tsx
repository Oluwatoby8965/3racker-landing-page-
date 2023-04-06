import { Footer } from "../components";
import { HomeLayout } from "../layouts";
import { Outlet } from "react-router-dom";

const SharedLayeout = () => {
  return (
    <>
      <HomeLayout />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayeout;
