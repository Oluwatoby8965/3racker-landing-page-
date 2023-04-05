import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthIndexPage, HomeIndexPage } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomeIndexPage />} />
        <Route path="/auth/*" element={<AuthIndexPage />} />
      </Routes>
    </>
  )
};