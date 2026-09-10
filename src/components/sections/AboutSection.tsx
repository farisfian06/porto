import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const meta = [
  ["University", "University of Brawijaya"],
  ["Major", "Information Systems (Faculty of Computer Science)"],
  ["Focus", "Full-Stack Web Development"],
] as const;

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.35], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.15, 0.5], [40, 0]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const metaYGaps = useTransform(scrollYProgress, [0.3, 0.85], [30, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-44 lg:px-16">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-16 md:mb-28"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-400">
            02 — ABOUT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[0.65fr_1fr] md:gap-20">
          <div className="relative">
            <motion.div
              style={{ y: headerY, opacity: headerOpacity }}
              className="md:sticky md:top-36"
            >
              <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                Building from
                <span className="block italic text-primary-500">
                  interface to infrastructure.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              style={{ y: textY, opacity: textOpacity }}
              className="prose prose-invert max-w-none mb-14"
            >
              <p className="text-base leading-[1.75] text-white/75 md:text-lg">
                I am a Bachelor of Computer graduate in Information Systems from
                the Faculty of Computer Science, University of Brawijaya, with
                expertise in full-stack web development. I build responsive
                applications end-to-end from frontend interfaces and RESTful
                APIs to database systems using{" "}
                <span className="text-white">Next.js</span>,{" "}
                <span className="text-white">Laravel</span>, HTML, CSS,
                JavaScript, and related technologies.
              </p>
              <p className="mt-5 text-base leading-[1.75] text-white/75 md:text-lg">
                Beyond code, I bring teamwork, leadership, initiative, and
                problem-solving to every project. I approach each task with a
                product mindset, continuously learning and adapting to
                professional-grade tools and workflows.
              </p>
            </motion.div>

            <motion.div
              style={{ y: metaYGaps, opacity: textOpacity }}
              className="grid grid-cols-[1px_1fr] gap-x-5 gap-y-6"
            >
              <motion.div
                style={{ scaleY: lineScale, originY: 0 }}
                className="h-full w-px bg-primary-500"
              />
              <div className="flex flex-col gap-6 py-1">
                {meta.map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-400">
                      {label}
                    </p>
                    <p className="mt-1.5 font-serif text-lg tracking-tight text-white md:text-xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
