import Router from "./routes/Router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useEffect, useState } from "react";
import MobileMenu from "./components/layout/MobileMenu";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <div className="py-[60px]">
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
