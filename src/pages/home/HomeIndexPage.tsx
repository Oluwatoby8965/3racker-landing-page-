// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./subroutes";
import ErrorPage from "./ErrorPage";
import { SignUpPage } from "../auth/subroutes/signupPage";
import { LoginPage } from "../auth/subroutes/loginPage";
import SharedLayeout from "../SharedLayeout";
import { HomeView } from "../../views";

function HomeIndexPage() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayeout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export { HomeIndexPage };
