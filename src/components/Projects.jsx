import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Website Cryptocurrency",
      category: "Web",
      description:
        "A real-time crypto price platform with interactive charts and the latest market news in one responsive dashboard.",
      fullDescription:
        "CryptoMania is a real-time cryptocurrency information platform designed to provide accurate and comprehensive market data. The website allows users to monitor price movements, market statistics, and the latest news from the crypto world in one clean and responsive interface.",
      image: "asset/portfolio/cryptomania.png",
      tech: [
        "React.js",
        "Node.js",
        "Html",
        "Css",
        "CoinGecko API",
        "Tailwind",
        "Postman",
        "Vercel",
      ],
      demoLink: "https://cryptomania-app.vercel.app/",
      githubLink: "https://github.com/Raihan9102/crypto-mania",
      features: [
        "Live Market Data",
        "Detailed Coin Analytics",
        "Search & Filtering",
        "Latest Crypto News",
        "Responsive Dashboard",
        "Prediction Price",
      ],
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "IoT",
      description:
        "IoT-based home automation system with temperature monitoring and remote control capabilities.",
      fullDescription:
        "An integrated smart home system using ESP32 microcontrollers, DHT sensors, and MQTT protocol. Control lights, monitor temperature/humidity, and receive real-time notifications through a web dashboard.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
      tech: ["ESP32", "Arduino", "MQTT", "React", "Node.js"],
      demoLink: "#",
      githubLink: "#",
      features: [
        "Temperature monitoring",
        "Remote device control",
        "Real-time alerts",
        "Energy consumption tracking",
        "Mobile responsive",
      ],
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web",
      description:
        "Modern and interactive portfolio website with glassmorphism design and smooth animations.",
      fullDescription:
        "A stunning portfolio website featuring glassmorphism design trends, Framer Motion animations, and responsive layouts. Showcases projects with filtering capabilities and includes contact forms.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoLink: "#",
      githubLink: "#",
      features: [
        "Glassmorphism design",
        "Smooth animations",
        "Project filtering",
        "Contact form",
        "SEO optimized",
      ],
    },
    // {
    //   id: 4,
    //   title: "Weather Monitoring Station",
    //   category: "IoT",
    //   description:
    //     "IoT weather station that collects and displays environmental data in real-time.",
    //   fullDescription:
    //     "A comprehensive weather monitoring system using multiple sensors to track temperature, humidity, air pressure, and air quality. Data is transmitted via WiFi and displayed on a web dashboard with historical charts.",
    //   image:
    //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    //   tech: ["ESP8266", "DHT22", "BMP280", "Chart.js", "Firebase"],
    //   demoLink: "#",
    //   githubLink: "#",
    //   features: [
    //     "Multi-sensor data collection",
    //     "Real-time dashboard",
    //     "Historical data charts",
    //     "Weather forecasting",
    //     "Email alerts",
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "Task Management App",
    //   category: "Web",
    //   description:
    //     "Collaborative task management application with drag-and-drop functionality.",
    //   fullDescription:
    //     "A Trello-inspired task management app with drag-and-drop boards, team collaboration features, deadline tracking, and progress visualization. Built with modern React practices and real-time updates.",
    //   image:
    //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    //   tech: ["React", "Redux", "Node.js", "Socket.io", "PostgreSQL"],
    //   demoLink: "#",
    //   githubLink: "#",
    //   features: [
    //     "Drag-and-drop",
    //     "Team collaboration",
    //     "Real-time updates",
    //     "Deadline tracking",
    //     "Progress reports",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Smart Garden System",
    //   category: "IoT",
    //   description:
    //     "Automated garden irrigation system with soil moisture monitoring.",
    //   fullDescription:
    //     "An intelligent garden management system that monitors soil moisture, light levels, and temperature to automatically water plants. Features include scheduling, manual override, and mobile notifications.",
    //   image:
    //     "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
    //   tech: [
    //     "Arduino",
    //     "Soil Sensors",
    //     "Relay Module",
    //     "React Native",
    //     "Firebase",
    //   ],
    //   demoLink: "#",
    //   githubLink: "#",
    //   features: [
    //     "Automated irrigation",
    //     "Soil moisture monitoring",
    //     "Light detection",
    //     "Scheduling system",
    //     "Mobile app",
    //   ],
    // },
    // {
    //   id: 7,
    //   title: "Blog Platform",
    //   category: "Web",
    //   description:
    //     "Full-featured blog platform with markdown support and comment system.",
    //   fullDescription:
    //     "A modern blog platform with markdown editor, syntax highlighting, user authentication, commenting system, and social sharing. Optimized for SEO and performance.",
    //   image:
    //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    //   tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    //   demoLink: "#",
    //   githubLink: "#",
    //   features: [
    //     "Markdown editor",
    //     "Comment system",
    //     "User profiles",
    //     "SEO optimization",
    //     "Social sharing",
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Security Camera System",
    //   category: "IoT",
    //   description:
    //     "IoT-based security camera with motion detection and cloud storage.",
    //   fullDescription:
    //     "A smart security system using ESP32-CAM with motion detection, face recognition, and automatic cloud backup. Sends instant notifications and allows live streaming through a web interface.",
    //   image:
    //     "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop",
    //   tech: ["ESP32-CAM", "Python", "OpenCV", "AWS S3", "WebRTC"],
    //   demoLink: "#",
    //   githubLink: "#",
    //   features: [
    //     "Motion detection",
    //     "Face recognition",
    //     "Cloud storage",
    //     "Live streaming",
    //     "Instant alerts",
    //   ],
    // },
  ];

  const filters = ["All", "Web", "IoT"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work in Web Development and IoT
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "glass-effect text-gray-300 hover:bg-white/10"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass-effect rounded-2xl overflow-hidden cursor-pointer hover:bg-white/10 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoLink, "_blank");
                        }}
                        className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                      >
                        Live Demo
                      </button>
                    }
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubLink, "_blank");
                      }}
                      className=" px-4 py-2 glass-effect rounded-lg text-sm font-semibold hover:bg-white/10 transition-all "
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm font-semibold">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 glass-effect rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {
                      <button
                        onClick={() =>
                          window.open(selectedProject.demoLink, "_blank")
                        }
                        className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg transition-all"
                      >
                        View Live Demo
                      </button>
                    }
                    <button
                      onClick={() =>
                        window.open(selectedProject.githubLink, "_blank")
                      }
                      className="px-6 py-3 glass-effect rounded-xl font-semibold hover:bg-white/10 transition-all"
                    >
                      View on GitHub
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
