import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Semester", value: "8", icon: "📚" },
    { label: "Focus Areas", value: "2", icon: "🎯" },
    { label: "Projects", value: "2", icon: "💼" },
    { label: "Tech Stack", value: "12+", icon: "⚡" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="text-purple-400 font-semibold">
                Telecommunication Engineering
              </span>{" "}
              student in my final year with a deep passion for technology and
              innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech has led me to explore two fascinating domains:{" "}
              <span className="text-blue-400 font-semibold">
                Web Development
              </span>
              , where I create responsive and interactive user experiences, and{" "}
              <span className="text-pink-400 font-semibold">
                Internet of Things (IoT)
              </span>
              , where I bridge the physical and digital worlds.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm continuously learning and improving my skills, always eager to
              take on new challenges and collaborate on innovative projects that
              make a real-world impact.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-lg mb-2">Fast Learner</h4>
              <p className="text-gray-400 text-sm">
                Quick to adapt and master new technologies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-semibold text-lg mb-2">Problem Solver</h4>
              <p className="text-gray-400 text-sm">
                Creative solutions to complex challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-lg mb-2">Team Player</h4>
              <p className="text-gray-400 text-sm">
                Collaborative mindset and strong communication
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
