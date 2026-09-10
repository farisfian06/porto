import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";

import dentine2026Cover from "../../assets/projects/dentine-2026/cover.jpeg";
import dentine202601 from "../../assets/projects/dentine-2026/01.jpeg";
import dentine202602 from "../../assets/projects/dentine-2026/02.jpeg";
import dentine202603 from "../../assets/projects/dentine-2026/03.jpeg";
import dentine2027Cover from "../../assets/projects/dentine-2027/cover.jpeg";
import dentine202701 from "../../assets/projects/dentine-2027/01.jpeg";
import dentine202702 from "../../assets/projects/dentine-2027/02.jpeg";
import hrfTransCover from "../../assets/projects/hrf-trans/cover.png";
import hrfTrans01 from "../../assets/projects/hrf-trans/01.png";
import hrfTrans02 from "../../assets/projects/hrf-trans/02.png";
import itFestCover from "../../assets/projects/it-fest/cover.png";
import itFest01 from "../../assets/projects/it-fest/01.png";
import kbmdsiCover from "../../assets/projects/kbmdsi/cover.png";
import kbmdsi01 from "../../assets/projects/kbmdsi/01.png";
import kbmdsi02 from "../../assets/projects/kbmdsi/02.png";
import kbmdsi03 from "../../assets/projects/kbmdsi/03.png";
import kbmdsi04 from "../../assets/projects/kbmdsi/04.png";
import kelanaKampusCover from "../../assets/projects/kelana-kampus/cover.png";
import kelanaKampus01 from "../../assets/projects/kelana-kampus/01.png";
import kelanaKampus02 from "../../assets/projects/kelana-kampus/02.png";
import kelanaKampus03 from "../../assets/projects/kelana-kampus/03.png";
import kelanaKampus04 from "../../assets/projects/kelana-kampus/04.png";
import kelanaKampus05 from "../../assets/projects/kelana-kampus/05.png";
import siplpCover from "../../assets/projects/siplp/cover.jpeg";
import siplp01 from "../../assets/projects/siplp/01.jpeg";
import siplp02 from "../../assets/projects/siplp/02.jpeg";
import siplp03 from "../../assets/projects/siplp/03.jpeg";
import telemedicineCover from "../../assets/projects/telemedicine/cover.jpeg";
import telemedicine01 from "../../assets/projects/telemedicine/01.jpeg";

type Project = {
  title: string;
  year: string;
  role: string;
  detail: string;
  stack: string[];
  images: string[];
};

const projects: Project[] = [
  {
    title: "Kelana Kampus",
    year: "2023",
    role: "Frontend Development",
    detail:
      "A student-facing web app for campus life and wellbeing support, built to help students living away from home.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    images: [
      kelanaKampusCover,
      kelanaKampus01,
      kelanaKampus02,
      kelanaKampus03,
      kelanaKampus04,
      kelanaKampus05,
    ],
  },
  {
    title: "HRF Trans",
    year: "2024",
    role: "Full-Stack Development",
    detail:
      "A vehicle rental web application with user flows for sign in, rental booking, and CRUD operations on a local database.",
    stack: ["Laravel", "Laravel Blade"],
    images: [hrfTransCover, hrfTrans01, hrfTrans02],
  },
  {
    title: "IT Fest",
    year: "2024",
    role: "Web Development",
    detail:
      "A competition information and registration site for an internal faculty IT festival.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    images: [itFestCover, itFest01],
  },
  {
    title: "KBMDSI UB",
    year: "2024",
    role: "Frontend Developer",
    detail:
      "Profile and content website for the information-systems student organization, rebuilt for a cleaner team workflow.",
    stack: ["Laravel", "React", "Tailwind CSS"],
    images: [kbmdsiCover, kbmdsi01, kbmdsi02, kbmdsi03, kbmdsi04],
  },
  {
    title: "Telemedicine",
    year: "2025",
    role: "Full-Stack Development",
    detail:
      "A telemedicine platform prototype with appointment and consultation flows built across Laravel and Vue.",
    stack: ["Laravel", "Vue", "Tailwind CSS"],
    images: [telemedicineCover, telemedicine01],
  },
  {
    title: "Sistem Informasi PLP",
    year: "2025",
    role: "Full-Stack Development",
    detail:
      "An information system for a university activity, covering case views, data management, and internal reporting.",
    stack: ["Laravel", "React", "Inertia"],
    images: [siplpCover, siplp01, siplp02, siplp03],
  },
  {
    title: "Dentine 2026",
    year: "2026",
    role: "Full-Stack Development",
    detail:
      "A Next.js + Laravel web platform built around a structured feature flow with a clean frontend-backend contract.",
    stack: ["Next.js", "Laravel"],
    images: [dentine2026Cover, dentine202601, dentine202602, dentine202603],
  },
  {
    title: "Dentine 2027",
    year: "2026-2027",
    role: "Full-Stack Development",
    detail:
      "A follow-up iteration using Next.js and Express, extending the feature set with a more modular backend.",
    stack: ["Next.js", "Express.js"],
    images: [dentine2027Cover, dentine202701, dentine202702],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

// Max tilt angle (deg) for the cursor-reactive cover frame
const TILT_RANGE = 10;

type ProjectItemProps = {
  project: Project;
  index: number;
  total: number;
  flip: boolean;
};

const ProjectItem = ({ project, index, total, flip }: ProjectItemProps) => {
  const itemRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    itemProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [90, -90],
  );
  const coverScale = useTransform(
    itemProgress,
    [0, 0.4, 1],
    prefersReducedMotion ? [1, 1, 1] : [1.04, 1, 0.98],
  );

  // One clear entrance per project: the screenshot settles in first, then
  // the text cascades in line by line. Each fires once as the project
  // scrolls into view — a single reveal instead of scattered fades.
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const contentContainerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const tagListVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.35,
        ease: "easeOut",
      },
    },
  };

  // Cursor-reactive tilt + light sweep on the cover frame — treat the
  // screenshot like a screen you're tilting in your hands.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springRotateX = useSpring(tiltX, {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });
  const springRotateY = useSpring(tiltY, {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotlightBackground = useMotionTemplate`radial-gradient(480px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.14), transparent 70%)`;

  const handleFrameMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    spotX.set(px);
    spotY.set(py);
    tiltX.set((0.5 - py / 100) * TILT_RANGE);
    tiltY.set((px / 100 - 0.5) * TILT_RANGE);
  };

  const handleFrameMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const cover = project.images[activeIndex];
  const shots = project.images.slice(1);

  return (
    <article
      ref={itemRef}
      className="relative grid grid-cols-1 gap-10 border-t border-white/10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
    >
      <motion.div
        style={{ y: imageY }}
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`relative ${flip ? "lg:order-2" : ""}`}
      >
        <motion.div
          style={{ scale: coverScale }}
          className="overflow-hidden rounded-2xl bg-primary-950/60"
        >
          <div
            onMouseMove={handleFrameMouseMove}
            onMouseLeave={handleFrameMouseLeave}
            className="group relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={cover}
                  src={cover}
                  alt={`${project.title} screenshot ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    ease: "easeOut",
                  }}
                  className="aspect-[16/10] w-full object-cover object-top"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </AnimatePresence>
            </motion.div>
            <motion.div
              aria-hidden
              style={{ background: spotlightBackground }}
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </motion.div>
        {shots.length > 0 && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {shots.slice(0, 4).map((src, idx) => {
              const isActive = idx + 1 === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx + 1)}
                  aria-label={`Lihat screenshot ${idx + 2} dari ${project.title}`}
                  aria-pressed={isActive}
                  className="overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${idx + 2}`}
                    className={`aspect-[16/10] w-full object-cover object-top transition-all duration-300 ${
                      isActive
                        ? "opacity-100 ring-1 ring-inset ring-primary-400"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        )}
      </motion.div>

      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`self-center ${flip ? "lg:order-1" : ""}`}
      >
        <motion.p
          variants={fadeUpVariants}
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary-400"
        >
          {pad(index + 1)} / {pad(total)} — {project.year}
        </motion.p>
        <motion.h3
          variants={fadeUpVariants}
          className="mt-4 font-serif text-4xl tracking-tight md:text-5xl"
        >
          {project.title}
        </motion.h3>
        <motion.p
          variants={fadeUpVariants}
          className="mt-2 text-sm text-white/50"
        >
          {project.role}
        </motion.p>
        <motion.p
          variants={fadeUpVariants}
          className="mt-6 max-w-[48ch] text-base leading-relaxed text-white/65"
        >
          {project.detail}
        </motion.p>
        <motion.ul
          variants={tagListVariants}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.stack.map((s) => (
            <motion.li
              key={s}
              variants={tagVariants}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70"
            >
              {s}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </article>
  );
};

const ProjectSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const dotTop = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const dotOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.12, 0.88, 0.96],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-40 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-400">
          04 — PROJECTS
        </p>
        <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.1] tracking-tight md:text-7xl">
          Work built from
          <span className="block italic text-primary-500">
            first page to release.
          </span>
        </h2>
        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-white/60">
          Eight projects across frontend, full-stack, and platform work, in
          order of when they shipped.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6 pb-28 md:px-10 md:pb-40 lg:px-16">
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block">
          <motion.div
            style={{ scaleY: lineScale, originY: 0 }}
            className="h-full w-full bg-primary-500"
          />
          <motion.div
            aria-hidden
            style={{ top: dotTop, opacity: dotOpacity }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="absolute -inset-2 rounded-full bg-primary-500/40 blur-md" />
            <span className="relative block h-2 w-2 rounded-full bg-primary-500" />
          </motion.div>
        </div>

        <div className="lg:pl-16">
          {projects.map((p, i) => (
            <ProjectItem
              key={p.title}
              project={p}
              index={i}
              total={projects.length}
              flip={i % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
