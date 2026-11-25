
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  Code2,
  Sparkles,
  ShieldCheck,
  ChartNoAxesCombined,
  ShoppingBag,
  FileSearch,
  ExternalLink,
} from "lucide-react";
// Optimized WebP dashboard images
import codemindImg from "../assets/projects/codemind-dashboard.webp";
import idnexaImg from "../assets/projects/idnexa-dashboard.webp";
import finsightImg from "../assets/projects/finsight-dashboard.webp";
import foodhubImg from "../assets/projects/foodhub-dashboard.webp";
import sohaImg from "../assets/projects/soha-dashboard.webp";
// Project links
const projectLinks = {
  foodhub: {
    live: "https://food-hub-mern-tau.vercel.app/",
    github: "https://github.com/kaurnancy703-ux/FoodHub-MERN",
  },

  idnexa: {
    live: "",
    github: "",
  },
};

// Project information
const projects = [
  {
    id: 1,
    title: "CODEMIND AI",
    subtitle: "AI-Powered Code Review Platform",
    category: "Artificial Intelligence",
    description:
      "An AI-powered code review platform designed to help developers analyze code, identify potential issues, and improve code quality.",
    details:
      "CODEMIND AI brings intelligent code analysis into a developer-focused experience. The platform explores AI-assisted code review, code quality insights, review history and developer productivity.",
    features: [
      "AI-powered code analysis",
      "Code quality insights",
      "Review history",
      "Developer-focused dashboard",
    ],
    tech: ["React", "Node.js", "Express.js", "Groq API", "MongoDB"],
    icon: Code2,
    image: codemindImg,
    accent: {
      text: "text-cyan-300",
      border: "hover:border-cyan-400/50",
      glow: "bg-cyan-500",
      tag: "bg-cyan-400/10 border-cyan-300/20 text-cyan-200",
      button: "bg-cyan-600 hover:bg-cyan-500",
    },
    status: "Featured Project",
  },
  {
    id: 2,
    title: "IDNEXA",
    subtitle: "Decentralized Digital Identity Vault",
    category: "Web3 & Blockchain",
    description:
      "A decentralized digital identity solution exploring Self-Sovereign Identity and Decentralized Identifiers.",
    details:
      "IDNEXA explores a decentralized approach to digital identity management, focusing on user-controlled identity and decentralized identity architecture.",
    features: [
      "Self-Sovereign Identity concepts",
      "Decentralized Identifiers",
      "Identity management",
      "Decentralized architecture",
    ],
    tech: ["React", "JavaScript", "Web3", "DID", "SSI"],
    icon: ShieldCheck,
    image: idnexaImg,
    live: projectLinks.idnexa.live,
    github: projectLinks.idnexa.github,
    accent: {
      text: "text-[#D2CF9A]",
      border: "hover:border-[#9A7E3B]/70",
      glow: "bg-[#9A7E3B]",
      tag: "bg-[#9A7E3B]/15 border-[#9A7E3B]/30 text-[#D2CF9A]",
      button: "bg-[#6D7139] hover:bg-[#9A7E3B]",
    },
    status: "Featured Project",
  },
  {
    id: 3,
    title: "FinSight AI",
    subtitle: "Intelligent Financial Analytics",
    category: "Artificial Intelligence",
    description:
      "An AI-powered financial analytics application focused on financial data, transaction analysis, and intelligent insights.",
    details:
      "FinSight AI combines financial data management, backend services and database integration to explore intelligent financial analytics and spending insights.",
    features: [
      "Financial data analysis",
      "Transaction management",
      "Database-backed application",
      "AI-powered financial insights",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Gemini API", "Recharts"],
    icon: ChartNoAxesCombined,
    image: finsightImg,
    accent: {
      text: "text-[#F2DACE]",
      border: "hover:border-[#AA5E7A]/70",
      glow: "bg-[#AA5E7A]",
      tag: "bg-[#AA5E7A]/15 border-[#D49A9A]/30 text-[#F2DACE]",
      button: "bg-[#7C0E44] hover:bg-[#AA5E7A]",
    },
    status: "Featured Project",
  },
  {
    id: 4,
    title: "FoodHub",
    subtitle: "Full Stack Food Ordering Platform",
    category: "Full Stack Development",
    description:
      "A food ordering web application focused on a smooth customer experience and modern full-stack development.",
    details:
      "FoodHub is a full-stack food ordering project focused on bringing restaurant discovery and food ordering into a responsive web experience.",
    features: [
      "Food ordering experience",
      "Frontend and backend integration",
      "Responsive user interface",
      "Full-stack application architecture",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    icon: ShoppingBag,
    image: foodhubImg,
    live: projectLinks.foodhub.live,
    github: projectLinks.foodhub.github,
    accent: {
      text: "text-[#FFD16A]",
      border: "hover:border-[#F5B52E]/70",
      glow: "bg-[#D9361E]",
      tag: "bg-[#4F7D32]/20 border-[#FFD16A]/30 text-[#FFD16A]",
      button: "bg-[#D9361E] hover:bg-[#F5B52E] hover:text-[#28301C]",
    },
    status: "Featured Project",
  },
  {
    id: 5,
    title: "SOHA AI",
    subtitle: "AI Resume Analyzer",
    category: "Artificial Intelligence",
    description:
      "An AI-powered resume analyzer designed to evaluate ATS compatibility, compare resumes with job descriptions, and suggest improvements.",
    details:
      "SOHA AI focuses on intelligent resume evaluation by analyzing resume content, identifying missing keywords and providing personalized improvement suggestions.",
    features: [
      "ATS compatibility analysis",
      "Resume and job description comparison",
      "Missing keyword identification",
      "Personalized improvement suggestions",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AI API"],
    icon: FileSearch,
    image: sohaImg,
    accent: {
      text: "text-amber-300",
      border: "hover:border-amber-400/50",
      glow: "bg-amber-500",
      tag: "bg-amber-400/10 border-amber-300/20 text-amber-200",
      button: "bg-amber-600 hover:bg-amber-500",
    },
    status: "Major Project",
  },
];
function isValidUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Full Stack Development",
    "Artificial Intelligence",
    "Web3 & Blockchain",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute left-0 top-40 w-72 h-72 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
            My Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Featured Projects
                <span className="text-purple-400">.</span>
              </h2>

              <p className="text-gray-400 mt-5 max-w-xl leading-7">
                A collection of applications and ideas built through
                experimentation, engineering and continuous learning.
              </p>
            </div>

            <span className="text-purple-300 text-sm">
              {projects.length} Selected Projects
            </span>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap mt-12 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-400/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -9 }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${project.title}`}
                  className={`group text-left cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl ${project.accent.border} transition-colors duration-300`}
                >
                  {/* Project image */}
                  <div className="relative h-56 overflow-hidden bg-white/5">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} dashboard preview`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon size={75} strokeWidth={1} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090817] via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-xs text-white">
                      {project.status}
                    </span>

                    <div className={`absolute bottom-4 right-4 w-11 h-11 rounded-full ${project.accent.button} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300`}>
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-6">
                    <p className={`text-xs uppercase tracking-wider mb-3 ${project.accent.text}`}>
                      {project.category}
                    </p>

                    <h3 className={`text-2xl font-bold text-white transition-colors ${project.accent.text}`}>
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2 mb-5">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-400 text-sm leading-7 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-lg border text-xs ${project.accent.tag}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-7 pt-5 border-t border-white/10">
                      <span className={`text-sm text-gray-300 transition-colors ${project.accent.text}`}>
                        Explore Project
                      </span>

                      <ArrowUpRight
                        size={18}
                        className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${project.accent.text}`}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#100c20] p-7 md:p-10 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white flex items-center justify-center"
              >
                <X size={20} />
              </button>

              <p className={`uppercase tracking-[4px] text-xs mb-5 ${selectedProject.accent.text}`}>
                Project Overview
              </p>

              <h3
                id="project-modal-title"
                className="text-3xl md:text-4xl font-bold text-white pr-8"
              >
                {selectedProject.title}
              </h3>

              <p className={`mt-3 ${selectedProject.accent.text}`}>
                {selectedProject.subtitle}
              </p>

              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} dashboard`}
                  className="w-full max-h-64 object-cover object-top rounded-2xl mt-6 border border-white/10"
                />
              )}

              <p className="text-gray-400 leading-8 mt-7">
                {selectedProject.details}
              </p>

              <h4 className="text-white font-semibold mt-8 mb-4">
                Key Features
              </h4>

              <div className="grid sm:grid-cols-2 gap-3">
                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 items-start rounded-xl bg-white/[0.04] border border-white/10 p-4"
                  >
                    <Sparkles
                      size={17}
                      className={`shrink-0 mt-1 ${selectedProject.accent.text}`}
                    />
                    <span className="text-sm text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-white font-semibold mt-8 mb-4">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full border text-sm ${selectedProject.accent.tag}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-9 pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center">
                {isValidUrl(selectedProject.live) && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={`px-5 py-3 rounded-xl text-white text-sm font-medium flex items-center gap-2 transition-all ${selectedProject.accent.button}`}
                  >
                    Live Demo
                    <ExternalLink size={17} />
                  </a>
                )}

                {isValidUrl(selectedProject.github) && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="px-5 py-3 rounded-xl border border-white/15 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Code2 size={17} />
GitHub Repository
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto px-5 py-3 rounded-xl border border-white/15 text-gray-300 text-sm hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
