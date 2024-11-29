import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/Landing/LandingPage";
import Signup from "../auth/Signup/Signup";
import Login from "../auth/Login/Login";

const AllRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

        </Routes>
    )
}

export default AllRoutes;