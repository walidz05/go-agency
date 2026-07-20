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
import logo from "../../assets/logos/go_footer_cropped.png";
import { HashLink } from "react-router-hash-link";

const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/profile.php?id=61592176528957",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/go-boost-agency/?viewAsMember=true",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/goboost.ma/",
  },
  {
    icon: FaTiktok,
    url: "https://www.tiktok.com/@goboost.ma?lang=fr",
  },
];
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-[#07142A] via-[#081A38] to-[#07142A]">
      <div className="container">
        <div
          className="
                grid
                grid-cols-1
                lg:grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr]
                gap-12
                py-14
              "
        >
          {/* Logo */}
          <div className="flex flex-col gap-5">
            <Link to="/">
              <img src={logo} alt="logo" className="w-auto object-contain" />
            </Link>

            <p className="max-w-[220px] text-sm leading-7 text-gray-400 ">
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
                    <HashLink
                      smooth
                      to={link.href}
                      scroll={(el) =>
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                      className="text-gray-400 transition hover:text-[#FFD700]"
                    >
                      {link.name}
                    </HashLink>
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

            <div className="flex gap-4 sm:flex-col">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Media"
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
                      transition-all
                      duration-300
                      hover:border-[#FFD700]
                      hover:bg-[#FFD700]
                      hover:text-[#0B1120]
                      hover:scale-110
                    "
                >
                  <Icon size={18} />
                </a>
              ))}
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
