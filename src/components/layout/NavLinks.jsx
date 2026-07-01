import { navLinks } from "./navbarData";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ color }) => {
  const location = useLocation();

  return (
    <>
      {navLinks.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          className={`
            relative
            pb-2
            ${color}
            text-[14px]
            font-normal
            tracking-wide
            transition-all
            duration-300
            hover:text-secondary

            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-secondary
            after:transition-all
            after:duration-300
            hover:after:w-full

            ${
              location.pathname === item.path
                ? "text-secondary after:w-full"
                : ""
            }
          `}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
