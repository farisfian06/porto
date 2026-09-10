import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "../../assets/landing_page/Foto profile.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const frameRotate = useTransform(scrollYProgress, [0, 1], [-6, 5]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[180dvh] bg-black text-white"
    >
      <div className="sticky top-0 flex min-h-dvh lg:h-dvh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 lg:px-16">
          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="self-center"
          >
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-primary-400">
              Faris Ihsan Alifian / 2004
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
              Systems with
              <span className="block font-serif font-normal italic text-primary-500">
                depth and craft.
              </span>
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-[auto_1fr] gap-5 border-t border-white/15 pt-5">
              <span className="font-mono text-xs text-primary-400">
                01 — 03
              </span>
              <p className="max-w-[42ch] text-base leading-relaxed text-white/65">
                Full-stack developer from Malang, Indonesia. I build the front
                and the back of the web. From APIs, interfaces, and everything
                between.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#project"
                className="rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-1 active:scale-[0.98]"
              >
                View projects <span aria-hidden="true">↘</span>
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-primary-500 hover:text-primary-400 active:scale-[0.98]"
              >
                About me
              </a>
            </div>
          </motion.div>

          <div className="relative flex min-h-124 items-center justify-center md:min-h-168">
            <motion.div
              style={{ rotate: frameRotate }}
              className="absolute h-[78%] w-[72%] translate-x-8 rounded-4xl bg-primary-500/90 md:translate-x-12"
            />
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative z-1 h-[78%] w-[72%] overflow-hidden rounded-4xl bg-primary-50 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]"
            >
              <img
                src={profileImage}
                alt="Faris Ihsan Alifian"
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
            <motion.p
              style={{ y: imageY }}
              className="absolute bottom-8 left-0 font-mono text-xs uppercase tracking-[0.22em] text-white/50 md:bottom-12"
            >
              Fullstack Developer
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 md:left-10">
          <span className="h-px w-10 bg-primary-500" /> Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
