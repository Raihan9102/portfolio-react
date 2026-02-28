import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Badge Welcome - Tetap Center di atas */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-purple-300">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Grid Layout: 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* KOLOM KIRI: Foto Profile */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              {/* Efek Glow di belakang foto */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30"></div>
              <img
                src="/asset/portfolio/foto_try.jpg"
                alt="M. Raihan"
                className="relative w-full max-w-[320px] md:max-w-[400px] rounded-3xl border border-white/20 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* KOLOM KANAN: Teks & Tombol */}
          <div className="flex flex-col text-left ">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-3xl font-bold leading-tight mb-4 pt-10">
                Hi, I'm{" "}
                <span className="gradient-text block md:inline">
                  M. Raihan Thaffan Hidayat
                </span>
              </h1>

              <h2 className="text-xl md:text-3xl text-gray-300 leading-relaxed mb-8">
                A passionate{" "}
                <span className="text-purple-400 font-semibold">
                  Telecommunication Engineering
                </span>{" "}
                student specializing in{" "}
                <span className="text-blue-400 font-semibold">
                  Web Development
                </span>{" "}
                and{" "}
                <span className="text-pink-400 font-semibold">
                  Internet of Things (IoT)
                </span>
              </h2>
            </motion.div>

            {/* Tombol Sekarang di bawah teks IoT */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all"
              >
                View Projects
              </motion.button>

              <motion.a
                href="/cv/cv_english.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center"
              >
                📄 Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-20 flex justify-center"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
