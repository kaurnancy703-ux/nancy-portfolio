import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import nancy from "../assets/nancy.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 uppercase tracking-[5px] mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Nancy Kaur
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "Java Developer",
              1500,
              "AI Enthusiast",
              1500,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-purple-300 mt-5 font-semibold"
          />

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
            Passionate Full Stack Developer focused on building modern,
            scalable web applications using the MERN Stack and AI-powered
            solutions. I enjoy creating user-friendly products that solve
            real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-500 transition px-8 py-3 rounded-xl font-medium"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-white/20 hover:bg-white/10 transition px-8 py-3 rounded-xl"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 mt-6">
            <a
              href="https://github.com/kaurnancy703-ux"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white transition font-medium"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nancy-kaur-0b1a90381"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white transition font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-5 mt-12 flex-wrap">

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl">
              <h3 className="text-2xl font-bold text-white">3+</h3>
              <p className="text-gray-400">Major Projects</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl">
              <h3 className="text-2xl font-bold text-white">MERN</h3>
              <p className="text-gray-400">Stack</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl">
              <h3 className="text-2xl font-bold text-white">AI</h3>
              <p className="text-gray-400">Projects</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-3xl"></div>

            <img
              src={nancy}
              alt="Nancy Kaur"
              className="relative w-[350px] md:w-[450px] rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;