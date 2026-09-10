import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    year: "2022",
    role: "First Lines of Code",
    place: "Information Systems, University of Brawijaya",
    detail:
      "Enrolled at the Faculty of Computer Science and met programming for the first time learning logic, algorithms, and how software is built.",
    stack: "",
  },
  {
    year: "2023",
    role: "Into the Web",
    place: "Frontend Developer",
    detail:
      "Moved into web development in earnest, focusing on responsive interfaces and the fundamentals that carry across every project.",
    stack: "HTML · CSS · JavaScript",
  },
  {
    year: "Apr - Des 2024",
    role: "Frontend Developer",
    place: "KBMDSI",
    detail:
      "Built and maintained the organization's profile website as part of a team, translating designs into production interfaces.",
    stack: "React · Tailwind CSS",
  },
  {
    year: "Mar - Jun 2025",
    role: "Web Developer, Student Employee",
    place: "FILKOM UB",
    detail:
      "Developed a web-based information system for a university activity, working across views, data, and server-side logic.",
    stack: "Laravel · React · Inertia",
  },
  {
    year: "Sep 2025 - Jan 2026",
    role: "Fullstack Web Developer Intern",
    place: "PT Aksamedia Mulia Digital",
    detail:
      "Shipped production features end-to-end building interfaces, services, and integrating APIs in an industry setting.",
    stack: "Laravel · React · API Integration",
  },
] as const;

type ExperienceItemProps = {
  item: (typeof experience)[number];
  progress: MotionValue<number>;
  index: number;
  total: number;
};

const ExperienceItem = ({
  item,
  progress,
  index,
  total,
}: ExperienceItemProps) => {
  const start = 0.06 + (index / total) * 0.74;
  const end = start + 0.16;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [40, 0]);
  const dotScale = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.li
      style={{ opacity, y }}
      className="relative grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10"
    >
      <motion.span
        style={{ scale: dotScale }}
        className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-primary-50 bg-primary-500"
        aria-hidden="true"
      />
      <div className="col-start-2 pb-14 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-600">
          {item.year}
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-tight text-black md:text-3xl">
          {item.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-black/70">{item.place}</p>
        <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-black/55 md:text-base">
          {item.detail}
        </p>
        {item.stack ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-600">
            {item.stack}
          </p>
        ) : null}
      </div>
    </motion.li>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 55%"],
  });

  const headerY = useTransform(headerProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(headerProgress, [0, 0.25], [0, 1]);
  const lineScale = useTransform(timelineProgress, [0.04, 0.94], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-primary-50 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-44 lg:px-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.65fr_1fr] md:gap-20">
          <div>
            <motion.div
              style={{ y: headerY, opacity: headerOpacity }}
              className="md:sticky md:top-36"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-600">
                03 — EXPERIENCE
              </p>
              <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.1] tracking-tight md:text-7xl">
                From first lines to
                <span className="block italic text-primary-500">
                  full-stack products.
                </span>
              </h2>
              <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-black/60">
                A short trace of how I moved from learning code to building and
                shipping web applications end-to-end.
              </p>
            </motion.div>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-0 top-2 h-full w-px bg-black/10">
              <motion.div
                style={{ scaleY: lineScale, originY: 0 }}
                className="h-full w-full bg-primary-500"
              />
            </div>
            <ol className="relative pl-8 md:pl-12">
              {experience.map((item, index) => (
                <ExperienceItem
                  key={item.year}
                  item={item}
                  progress={timelineProgress}
                  index={index}
                  total={experience.length}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
