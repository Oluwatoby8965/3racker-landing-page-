// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./subroutes";
import { HomeLayout } from "../../layouts";
import ErrorPage from "./ErrorPage";
import { SignUpPage } from "../auth/subroutes/signupPage";
import { LoginPage } from "../auth/subroutes/loginPage";

function HomeIndexPage() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
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
