import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-50 flex w-full justify-center pt-3"
    >
      <ul className="flex justify-between gap-3 rounded-3xl font-primaryBold text-primaryBlack-0 bg-white p-5 *:rounded-xl *:border *:border-gray-200 *:px-3 sm:*:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <Link
          className="flex justify-center items-center"
          to="/"
          onClick={() => scrollToSection("hero")}
        >
          <IoMdHome size={20} />
        </Link>
        <Link to="/" onClick={() => scrollToSection("about")}>
          About
        </Link>
        <Link to="/" onClick={() => scrollToSection("experience")}>
          Experience
        </Link>
        <Link to="/" onClick={() => scrollToSection("project")}>
          Project
        </Link>
        <Link to="/" onClick={() => scrollToSection("tech")}>
          Tech
        </Link>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
