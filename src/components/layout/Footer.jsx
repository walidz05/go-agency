import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import {
  navigationLinks,
  serviceLinks,
  legalLinks,
} from "../../data/footerLinks";
import { memo } from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-[#07142A] via-[#081A38] to-[#07142A]">
      <div className="container">
        <div className="grid gap-12 grid-cols-1  sm:grid-cols-5 py-14 ">
          {/* Logo */}

          <div>
            <h1 className="text-secondary text-3xl uppercase font-extrabold">
              logo
            </h1>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              Votre partenaire digital pour une croissance sans limites.
            </p>
          </div>

          {/* Navigation */}

          {navigationLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-semibold text-white">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 transition hover:text-[#FFD700]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Services */}

          {serviceLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-semibold text-white">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 transition hover:text-[#FFD700]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal */}

          {legalLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-semibold text-white">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 transition hover:text-[#FFD700]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}

          <div>
            <h3 className="mb-5 font-semibold text-white">Suivez-nous</h3>

            <div className="flex sm:flex-col gap-4">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#111827]
                    text-white
                    transition
                    duration-300
                    hover:border-[#FFD700]
                    hover:bg-[#FFD700]
                    hover:text-[#0B1120]
                  "
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="py-[24px] border-t border-white/10 text-center text-sm  text-gray-500 flex justify-center ">
          © {new Date().getFullYear()} Boosted Agency. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
