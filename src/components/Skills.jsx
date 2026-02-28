import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          name: "React",
          level: "Beginner",
          description:
            "Building interactive UIs with hooks and state management",
        },
        {
          name: "Vue.js",
          level: "Beginner",
          description: "Progressive framework for building user interfaces",
        },
        {
          name: "HTML/CSS",
          level: "Beginner",
          description: "Semantic markup and modern styling techniques",
        },
        {
          name: "Tailwind CSS",
          level: "Beginner",
          description: "Utility-first CSS framework for rapid development",
        },
        {
          name: "JavaScript",
          level: "Beginner",
          description: "ES6+ features and modern JavaScript patterns",
        },
      ],
    },
    // {
    //   category: "Backend",
    //   skills: [
    //     {
    //       name: "Node.js",
    //       level: "Intermediate",
    //       description: "Building scalable server-side applications",
    //     },
    //     {
    //       name: "Express",
    //       level: "Intermediate",
    //       description: "Web application framework for Node.js",
    //     },
    //     {
    //       name: "REST API",
    //       level: "Advanced",
    //       description: "Designing and implementing RESTful services",
    //     },
    //     {
    //       name: "MongoDB",
    //       level: "Intermediate",
    //       description: "NoSQL database for modern applications",
    //     },
    //   ],
    // },
    {
      category: "IoT",
      skills: [
        {
          name: "Arduino",
          level: "Beginner",
          description: "Microcontroller programming and prototyping",
        },
        {
          name: "ESP32/ESP8266",
          level: "Beginner",
          description: "WiFi-enabled IoT development boards",
        },
        // {
        //   name: "MQTT",
        //   level: "Intermediate",
        //   description: "Lightweight messaging protocol for IoT",
        // },
        {
          name: "Sensors",
          level: "Beginner",
          description: "Integration of various sensors and actuators",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "Git",
          level: "Beginner",
          description: "Version control and collaborative development",
        },
        {
          name: "VS Code",
          level: "Intermediate",
          description: "Primary code editor with extensions",
        },
        {
          name: "Postman",
          level: "Beginner",
          description: "API testing and development tool",
        },
        {
          name: "Figma",
          level: "Beginner",
          description: "UI/UX design and prototyping",
        },
        {
          name: "Xampp",
          level: "Beginner",
          description:
            "Local server environment for web development and database management",
        },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      default:
        return "text-blue-400";
    }
  };

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onHoverStart={() =>
                      setHoveredSkill(`${categoryIndex}-${skillIndex}`)
                    }
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <div className="glass-effect rounded-xl px-5 py-3 cursor-pointer hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64"
                      >
                        <div className="glass-effect rounded-lg p-3 shadow-xl border border-purple-500/20">
                          <p className="text-sm text-gray-300">
                            {skill.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <p className="text-gray-300">
              💡 Always learning and exploring new technologies to expand my
              skill set
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
