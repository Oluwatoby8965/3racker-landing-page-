// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./subroutes";
import { HomeLayout } from "../../layouts";

function HomeIndexPage() {
    return (
        <>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    )
}

export { HomeIndexPage };