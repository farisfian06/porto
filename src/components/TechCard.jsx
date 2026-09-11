import { motion } from "framer-motion";
import React, { useState } from "react";

const TechCard = ({ children, nama }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="h-full aspect-square relative flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-20 flex justify-center items-center rounded-lg overflow-hidden"
        >
          <div className="absolute bg-black pointer-events-none bg-opacity-50 h-full w-full flex justify-center items-center">
            <motion.p
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="text-white font-serifBold text-center text-base"
            >
              {nama}
            </motion.p>
          </div>
        </motion.div>
      )}
      {children}
    </motion.div>
  );
};

export default TechCard;
