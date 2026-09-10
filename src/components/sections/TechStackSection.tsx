import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiExpress,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Express.js", icon: SiExpress },
];

const TechRow = ({ reverse = false }: { reverse?: boolean }) => {
  const items = [...technologies, ...technologies];

  return (
    <div className="group overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-3 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map(({ name, icon: Icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="flex min-w-36 items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-4 text-black transition-colors hover:border-primary-500 hover:text-primary-600"
          >
            <Icon size={24} aria-hidden="true" />
            <span className="whitespace-nowrap text-sm font-medium">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.35], [48, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="tech" className="bg-primary-50 text-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600">
            05 — TECH STACK
          </p>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.1] tracking-tight md:text-7xl">
            Tools for building
            <span className="block italic text-primary-500">end to end.</span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-black/60">
            The technologies I use to move from an empty repository to a useful,
            maintainable web application.
          </p>
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="mt-16 -mx-6 md:-mx-10 lg:-mx-16"
        >
          <TechRow />
          <TechRow reverse />
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="mt-20 border-t border-black/10 pt-8"
        >
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600">
                Open source rhythm
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                Consistency compounds.
              </h3>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed text-black/55">
              A snapshot of my public coding activity on GitHub.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-black p-5 text-white md:p-8">
            <GitHubCalendar
              username="farisfian06"
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ["#34221d", "#7a2f18", "#b53d18", "#e04b20", "#f36135"],
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
