import React, { useRef, useState } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import hrfTrans from "../../assets/project/hrfTrans.png";
import hrfTrans2 from "../../assets/project/hrfTrans 2.png";
import hrfTrans3 from "../../assets/project/hrfTrans 3.png";
import itFest from "../../assets/project/itFest.png";
import itFest2 from "../../assets/project/itFest 2.png";
import itFest3 from "../../assets/project/itFest 3.png";
import kbmdsi from "../../assets/project/kbmdsi.png";
import kbmdsi2 from "../../assets/project/kbmdsi 2.png";
import kbmdsi3 from "../../assets/project/kbmdsi 3.png";
import kbmdsi4 from "../../assets/project/kbmdsi 4.png";
import kbmdsi5 from "../../assets/project/kbmdsi 5.png";
import kbmdsi6 from "../../assets/project/kbmdsi 6.png";
import kbmdsi7 from "../../assets/project/kbmdsi 7.png";
import kelanaKampus from "../../assets/project/kelanaKampus.png";
import kelanaKampus2 from "../../assets/project/kelanaKampus 2.png";
import kelanaKampus3 from "../../assets/project/kelanaKampus 3.png";
import kelanaKampus4 from "../../assets/project/kelanaKampus 4.png";
import kelanaKampus5 from "../../assets/project/kelanaKampus 5.png";
import kelanaKampus6 from "../../assets/project/kelanaKampus 6.png";
import readMate from "../../assets/project/readMate.png";
import readMate2 from "../../assets/project/readMate 2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // Import Navigation

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/carousel.css";

const listProject = [
  {
    id: 1,
    judul: "KBMDSI UB",
    domain: "kbmdsi.ub.ac.id",
    img: [kbmdsi, kbmdsi3, kbmdsi4, kbmdsi2, kbmdsi5, kbmdsi6, kbmdsi7],
    keterangan:
      "Organization profile website of the Keluarga Besar Departemen Sistem Informasi",
  },
  {
    id: 2,
    judul: "ITFEST FILKOM 2024",
    domain: "itfest-filkom.my.id",
    img: [itFest, itFest2, itFest3],
    keterangan:
      "Website that contains information from the competition held by the ITFEST and the place of registration",
  },
  {
    id: 3,
    judul: "HRF TRANS",
    domain: "github.com/farisfian06/Project-2-pemweb-laravel",
    img: [hrfTrans, hrfTrans2, hrfTrans3],
    keterangan:
      "Website to rent a vehicle online, with feature like sign in, and rent a car, which implementing CRUD to local database",
  },
  {
    id: 4,
    judul: "Kelana Kampus",
    domain: "farisfian06.github.io/DDAP",
    img: [
      kelanaKampus,
      kelanaKampus2,
      kelanaKampus5,
      kelanaKampus6,
      kelanaKampus3,
      kelanaKampus4,
    ],
    keterangan:
      "Website that is involved in mental health and aims to help friends who have problems while living away from home",
  },
  {
    id: 5,
    judul: "Read Mate",
    domain: "",
    img: [readMate, readMate2],
    keterangan:
      "Mobile apps for reading article, with a feature like bookmarking and reading history. This app is integrated with firebase database",
  },
];

const Project = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scroll = useTransform(scrollYProgress, [0.2, 1], ["1%", "-85%"]);
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section id="project">
      <div className="container">
        <div ref={ref} className="h-[300vh] mt-8 relative">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col py-8">
            <h2 className="font-primaryBold text-3xl">Projects</h2>
            <div className="flex min-h-[50%]">
              <motion.div
                style={{
                  x: scroll,
                }}
                className="grid grid-flow-col mx-[2%] sm:mx-[26%] w-auto-cols-auto min-w-[400vw] sm:min-w-[200vw] min-h-[50%] items-center justify-center sm:gap-20"
              >
                {listProject.map((item) => (
                  <ProjectCard
                    key={item.id}
                    prjImg={item.img[0]}
                    judul={item.judul}
                    keterangan={item.keterangan}
                    onInView={() => setActiveProject(item)}
                  />
                ))}
              </motion.div>
            </div>
            <div className="w-full sm:max-w-md self-center h-full sm:max-h-[50%]">
              {activeProject && (
                <div className="mockup-browser border-base-300 border-4 h-fit bg-slate-400">
                  <div className="mockup-browser-toolbar">
                    <div className="input border-base-300 border">
                      <a
                        href={`https://${activeProject.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activeProject.domain}
                      </a>
                    </div>
                  </div>
                  <div className="border-base-300 flex relative justify-center border-t-4">
                    <Swiper
                      pagination={{ dynamicBullets: true }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="w-full h-full bg-slate-500"
                    >
                      {activeProject.img.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`${activeProject.judul} - Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
