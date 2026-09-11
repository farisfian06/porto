import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "tech", label: "Tech" },
];

const Navbar = () => {
  const [onHero, setOnHero] = useState(true);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const hero = document.getElementById("hero");
    const heroObserver = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { rootMargin: "-20% 0px -20% 0px" },
    );
    if (hero) heroObserver.observe(hero);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    }

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    const target = `#${id}`;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { duration: 1.4 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center rounded-full border p-1.5 backdrop-blur-md transition-colors duration-500 ${
          onHero
            ? "border-white/10 bg-black/40 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            : "border-black/10 bg-white/80 text-black shadow-[0_12px_32px_-16px_rgba(27,27,27,0.25)]"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="mr-1 hidden items-center gap-1 rounded-full px-3 py-1.5 font-mono text-xs tracking-[0.2em] sm:flex cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-6 h-6" />
        </button>
        <ul className="flex items-center">
          {SECTIONS.map(({ id, label }, index) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-4 cursor-pointer ${
                  active === id
                    ? onHero
                      ? "text-white"
                      : "text-black"
                    : onHero
                      ? "text-white/50 hover:text-white"
                      : "text-black/50 hover:text-black"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className={`absolute inset-0 rounded-full ${
                      onHero ? "bg-white/10" : "bg-black/5"
                    }`}
                  />
                )}
                <span
                  className={`relative hidden font-mono text-[10px] md:inline ${
                    onHero ? "text-primary-400" : "text-primary-500"
                  }`}
                >
                  0{index + 1}
                </span>
                <span className="relative">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
