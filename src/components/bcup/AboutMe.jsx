import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <section className="relative z-10 bg-primaryBlack-0 py-11" id="about">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ duration: 0.4 }}
            className="sm:w-[50%]"
          >
            <h2 className="font-primaryBold text-3xl text-primaryOrange-~0">
              ABOUT ME
            </h2>
            <h2 className="font-SerifRegular text-4xl">FARIS IHSAN ALIFIAN</h2>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-200px", once: true }}
            transition={{ duration: 0.4 }}
            className="flex sm:w-[50%] flex-col sm:flex-row h-full sm:h-auto"
          >
            <div className="h-1 self-end w-[80%] rounded bg-primaryOrange-0 mt-4 sm:hidden"></div>
            <div className="min-h-full w-1 rounded bg-primaryOrange-0 me-4 hidden sm:block"></div>
            <p className="font-primaryRegular w-full text-justify sm:w-[90%] text-base py-3 mt-2">
              I am a undergraduate Student of Information System Study, Faculty
              of Computer Science, University of Brawijaya, who has expertise in
              front end website development. Has expertise in HTML, CSS,
              React.js, etc to create attractive and responsive user interfaces.
              In addition to technical skills, also has experience working in a
              team, leadership skills, initiative, and solid problem-solving
              skills. Always learning and adapting to new technologies and
              focusing on career development in the professional field.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
