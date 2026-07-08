import Button from "../ui/Button";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen overflow-hidden
        border-r border-white/10
        bg-[#081321]/90
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,.7)]
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        lg:hidden
        ${
          open
            ? "translate-x-0 opacity-100 w-[340px]"
            : "-translate-x-full opacity-0 w-[340px]"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8">
          {/* Logo */}

          <Link to="/">
            <img src={logo} alt="GoBoosted" className="w-[170px] h-auto" />
          </Link>

          {/* Navigation */}

          <nav className="flex flex-col gap-7">
            <NavLinks
              color="text-white"
              hoverColor="hover:text-secondary transition duration-300"
            />
          </nav>

          {/* CTA */}

          <Button
            className=" mt-10
              sm:flex btn btn-primary"
          >
            {" "}
            Demander un devis
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
