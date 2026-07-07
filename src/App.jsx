import Router from "./routes/Router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useState } from "react";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <div className="sm:py-[60px]">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
