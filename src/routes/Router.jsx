import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home/Home";
import Apropos from "../pages/apropos/Apropos";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
// const Home = lazy(() => import("../pages/Home"));
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
