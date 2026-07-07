import NavLinks from "./NavLinks";
import Button from "../ui/Button";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { memo } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ open, setOpen }) => {
  return (
    <header
      className="
    fixed
    top-0
    left-0
    w-full
    z-50
    border-b border-[#18304D]
    bg-[#050B18]/80
    backdrop-blur-xl
    transition-all
    duration-300
  "
    >
      <div className="container flex h-[82px] items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1
            className="
        cursor-pointer
        text-[28px]
        font-extrabold
        tracking-[-1px]
        text-white
        transition-all
        duration-300
        hover:scale-105
      "
          >
            Go
            <span className="text-secondary">Boosted</span>
          </h1>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          <NavLinks color="text-white/90 hover:text-secondary transition-colors duration-300" />
        </nav>

        {/* CTA */}

        <Button
          className=" hidden
        sm:flex btn btn-primary"
        >
          {" "}
          Demander un devis
        </Button>

        {/* Mobile Menu */}

        {open ? (
          <IoCloseOutline
            onClick={() => setOpen(!open)}
            className="flex sm:hidden cursor-pointer"
            color="white"
          />
        ) : (
          <CiMenuFries
            onClick={() => setOpen(!open)}
            className="flex sm:hidden cursor-pointer"
            color="white"
          />
        )}
      </div>
    </header>
  );
};

export default memo(Navbar);
