import { motion } from "framer-motion";
import ecommerceImg from "../assets/projects/ecommerce.jpg";
import interviewAiImg from "../assets/projects/interview-ai.jpg";
import resumeAiImg from "../assets/projects/resume-ai.jpg";

const projects = [
  {
    title: "MERN E-Commerce Platform",
    image: ecommerceImg,
    status: "🚧 In Development",
    description:
      "A full-stack e-commerce platform featuring authentication, shopping cart, wishlist, secure payments, order tracking, product management, and admin dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  },

  {
    title: "AI Interview Copilot",
    image: interviewAiImg,
    status: "🚧 In Development",
    description:
      "An AI-powered interview preparation platform with resume analysis, mock interviews, personalized feedback, performance tracking, and career insights.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI"],
  },

  {
    title: "SOHA AI Resume Analyzer",
    image: resumeAiImg,
    status: "🚀 Major Project",
    description:
      "SOHA is an AI-powered resume analyzer that evaluates ATS compatibility, compares resumes with job descriptions, identifies missing keywords, and provides personalized improvement suggestions.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AI API"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-400 uppercase tracking-[4px] mb-3">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition">
                    Live Demo
                  </button>

                  <button className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;