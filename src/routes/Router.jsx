import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Politique from "../pages/Politique/Politique";

const Home = lazy(() => import("../pages/Home/Home"));
const Apropos = lazy(() => import("../pages/apropos/Apropos"));
const Services = lazy(() => import("../pages/services/Services"));
const Contact = lazy(() => import("../pages/contact/Contact"));

// const Home = lazy(() => import("../pages/Home"));
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/politique" element={<Politique />} />
      </Routes>
    </>
  );
}

export default Router;
