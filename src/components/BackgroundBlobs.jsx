import React from "react";
import { motion } from "framer-motion";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        style={{ top: "10%", left: "10%" }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        style={{ top: "50%", right: "10%" }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
        style={{ bottom: "10%", left: "40%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
