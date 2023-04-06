// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage } from "./subroutes";
import { HomeLayout } from "../../layouts";

function AuthIndexPage() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export { AuthIndexPage };
