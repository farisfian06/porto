import React, { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import TechCard from "../TechCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const icons = [
  { icon: <FaReact className="flex-shrink-0" size={100} />, nama: "React" },
  { icon: <FaHtml5 className="flex-shrink-0 " size={100} />, nama: "HTML" },
  { icon: <FaCss3Alt className="flex-shrink-0" size={100} />, nama: "CSS" },
  { icon: <FaJs className="flex-shrink-0" size={100} />, nama: "JavaScript" },
  {
    icon: <SiFramer className="flex-shrink-0" size={100} />,
    nama: "Framer Motion",
  },
  {
    icon: <FaBootstrap className="flex-shrink-0" size={100} />,
    nama: "Bootstrap",
  },
  {
    icon: <RiTailwindCssFill className="flex-shrink-0" size={100} />,
    nama: "Tailwind CSS",
  },
];

const TechStack = () => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 55;

  const [refLeft, { width: widthLeft }] = useMeasure();
  const [refRight, { width: widthRight }] = useMeasure();

  const xTranslationLeft = useMotionValue(0);
  const xTranslationRight = useMotionValue(0);

  const animateMarquee = (motionValue, start, end, duration) => {
    return animate(motionValue, [start, end], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
    });
  };

  useEffect(() => {
    if (widthLeft === 0) return;

    const finalPositionLeft = -widthLeft / 2 - 8;
    const controlsLeft = animateMarquee(
      xTranslationLeft,
      0,
      finalPositionLeft,
      FAST_DURATION
    );

    return () => controlsLeft.stop();
  }, [xTranslationLeft, widthLeft]);

  useEffect(() => {
    if (widthRight === 0) return;

    const finalPositionRight = widthRight / 2 + 8;
    const controlsRight = animateMarquee(
      xTranslationRight,
      0,
      finalPositionRight,
      FAST_DURATION
    );

    return () => controlsRight.stop();
  }, [xTranslationRight, widthRight]);

  const handleHover = (motionValue, width, setDuration, isSlow) => {
    const finalPosition =
      motionValue === xTranslationLeft ? -width / 2 - 8 : width / 2 + 8;
    const currentPosition = motionValue.get();
    const progress = Math.abs(currentPosition / finalPosition);
    const remainingDuration =
      (isSlow ? SLOW_DURATION : FAST_DURATION) * (1 - progress);

    animate(motionValue, [currentPosition, finalPosition], {
      ease: "linear",
      duration: remainingDuration,
      repeat: Infinity,
      repeatType: "loop",
    });

    setDuration(isSlow ? SLOW_DURATION : FAST_DURATION);
  };

  return (
    <section id="tech">
      <div className="container py-8">
        <h2 className="font-primaryBold text-3xl">Tech Stack</h2>

        {/* Marquee ke kiri */}
        <div className="max-w-md mx-auto mt-10 overflow-hidden h-fit">
          <motion.div
            ref={refLeft}
            className="sm:h-28 flex gap-4 relative w-max"
            style={{ x: xTranslationLeft }}
            onHoverStart={() =>
              handleHover(xTranslationLeft, widthLeft, () => {}, true)
            }
            onHoverEnd={() =>
              handleHover(xTranslationLeft, widthLeft, () => {}, false)
            }
          >
            {[...icons, ...icons].map((item, index) => (
              <TechCard key={index} nama={item.nama}>
                {item.icon}
              </TechCard>
            ))}
          </motion.div>
        </div>

        {/* Marquee ke kanan */}
        <div className="max-w-md mx-auto overflow-hidden h-fit mt-8 flex justify-end">
          <motion.div
            ref={refRight}
            className="sm:h-28 flex gap-4 relative w-max"
            style={{ x: xTranslationRight }}
            onHoverStart={() =>
              handleHover(xTranslationRight, widthRight, () => {}, true)
            }
            onHoverEnd={() =>
              handleHover(xTranslationRight, widthRight, () => {}, false)
            }
          >
            {[...icons, ...icons].map((item, index) => (
              <TechCard key={index} nama={item.nama}>
                {item.icon}
              </TechCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
