import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ProjectCard = ({ prjImg, keterangan, judul, onInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -50% 0px -50%" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);
  return (
    <div
      ref={ref}
      className={`bg-primaryBlack-0 w-full sm:w-[90%] h-fit rounded-3xl overflow-hidden transform transition-transform duration-300 group ${
        isInView ? "" : "scale-75"
      }`}
    >
      <img
        className="w-full object-cover sm:max-h-[12rem] relative top-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
        src={prjImg}
        alt="Project image"
      />
      <div className="px-8 py-4 relative bg-gradient-to-t from-gray-700 to-primaryBlack-0">
        <h3 className="text-primaryOrange-0 font-primaryBold">{judul}</h3>
        <p className="text-gray-300 font-primaryRegular">{keterangan}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
