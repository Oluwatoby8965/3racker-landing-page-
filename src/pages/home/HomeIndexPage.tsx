// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./subroutes";

function HomeIndexPage() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}

export { HomeIndexPage };