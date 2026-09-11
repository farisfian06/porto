import React, { useRef } from "react";
import profileImg from "../../assets/landing_page/Foto profile.png";
import {
  easeIn,
  easeOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const herolama = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotasi = useTransform(
    scrollYProgress,
    [0, 1],
    ["skewY(-8deg) ", "skewY(8deg) "],
  );

  const x1 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "30%"]);
  const x2 = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "-30%"]);
  const x3 = useTransform(scrollYProgress, [0.8, 1], ["0%", "30%"]);

  const op = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const op2 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const op3 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(to bottom right, #d1d5db, #808080, #000000)",
      "linear-gradient(to bottom right, #000000, #4b4b4b, #d1d5db)",
    ],
  );

  return (
    <header id="hero">
      <div className="container relative h-fit">
        <div ref={targetRef} className="h-[200vh]">
          <div className="flex h-screen flex-col sm:flex-row gap-8 sm:gap-12 sticky justify-center sm:justify-start items-center top-0 w-full overflow-hidden">
            <div className="relative h-1/3 sm:h-[80%] sm:w-1/3 z-20">
              <div className="overflow-hidden h-full flex justify-center">
                <motion.img
                  src={profileImg}
                  alt="Profile image"
                  className="w-full h-auto object-contain relative bottom-0 z-10"
                  style={{ y: y }}
                />
              </div>
              <motion.div
                className="w-full h-full absolute top-0 rounded-md shadow-lg"
                style={{
                  transform: rotasi,
                  backgroundImage: gradient,
                }}
              ></motion.div>
            </div>
            <div className="judul">
              <motion.h1
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
                style={{ x: x1, opacity: op }}
                className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[5rem]"
              >
                HELLO, MY <br />
                NAME IS <br />
              </motion.h1>
              <motion.div
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
                style={{ x: x2, opacity: op2 }}
                className="flex"
              >
                <h1 className="bg-primaryOrange-0 font-SerifRegular leading-none w-fit tracking-normal font-normal text-primaryBlack-0 text-[5rem]">
                  FARIS
                </h1>
                <p className="font-SerifRegular ms-2 font-[200] text-[2svh]">
                  2004
                </p>
              </motion.div>
              <motion.h1
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
                style={{ x: x3, opacity: op3 }}
                className="text-left font-primaryRegular tracking-wide leading-tight p-0 font-[600] text-[5rem]"
              >
                FRONT END <br />
                DEVELOPER.
              </motion.h1>
              <motion.p
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeIn }}
                style={{ x: x3, opacity: op3 }}
                className="leading-none text-right font-primaryRegular text-lg "
              >
                INDONESIA, MALANG
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default herolama;
