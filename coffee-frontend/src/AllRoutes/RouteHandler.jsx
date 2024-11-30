import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/Landing/LandingPage";
import Signup from "../auth/Signup/Signup";
import Login from "../auth/Login/Login";
import ContactPage from "../pages/Contact/ContactPage";
import Menu from "../pages/Menu/Menu";

const AllRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    )
}

export default AllRoutes;