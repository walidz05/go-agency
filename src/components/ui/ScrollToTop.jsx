import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-secondary/80 transition duration-300"
        >
          <RiArrowUpLine className="text-2xl" />
        </button>
      )}
    </>
  );
}
