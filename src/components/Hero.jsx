
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import nancy from "../assets/nancy.png";

const floatingTech = [
  { name: "React", top: "8%", left: "-8%" },
  { name: "Node.js", top: "25%", right: "-12%" },
  { name: "MongoDB", bottom: "16%", left: "-12%" },
  { name: "AI / ML", bottom: "5%", right: "-5%" },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#090817] px-6 pt-28 pb-16 lg:px-16"
    >
      {/* Ambient background */}
      <div className="absolute top-10 left-[-10%] w-[450px] h-[450px] bg-purple-700/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[450px] h-[450px] bg-fuchsia-600/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-500/10 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm text-purple-200 tracking-wide">
             FULL STACK WEB DEVELOPER
            </span>
          </div>

          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm Nancy Kaur
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.08]">
            Building
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            Experiences<span className="text-purple-400">.</span>
          </h1>

          <div className="mt-7 text-xl md:text-2xl text-purple-200 font-semibold min-h-9">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1600,
                "MERN Stack Developer",
                1600,
                "AI Enthusiast",
                1600,
                "Software Engineer",
                1600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-7 max-w-xl text-gray-400 leading-8 text-base md:text-lg">
            I build modern web applications and intelligent digital
            solutions using full-stack technologies and AI.
            Passionate about turning ambitious ideas into meaningful products.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-600/25 font-semibold"
            >
              Explore My Work ↗
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl hover:border-purple-400/60 transition-colors"
            >
              View Resume ↓
            </motion.a>
          </div>

          <div className="flex gap-7 mt-9 text-sm font-medium">
            <a
              href="https://github.com/kaurnancy703-ux"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nancy-kaur-0b1a90381"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:kaurnancy703@gmail.com"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              Email ↗
            </a>
          </div>
        </motion.div>

        {/* Interactive visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="relative flex items-center justify-center min-h-[420px] md:min-h-[550px]"
        >
          {/* Orb */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-br from-purple-500/40 via-fuchsia-500/20 to-blue-500/30 blur-3xl"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[470px] md:h-[470px] rounded-full border border-purple-400/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[270px] h-[270px] md:w-[390px] md:h-[390px] rounded-full border border-fuchsia-400/20 border-dashed"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="absolute inset-0 rounded-[40px] bg-purple-500/30 blur-2xl" />
            <img
              src={nancy}
              alt="Nancy Kaur - Full Stack Developer"
              className="relative w-[270px] sm:w-[340px] md:w-[390px] h-[340px] md:h-[440px] object-cover object-top rounded-[40px] border border-purple-300/30 shadow-2xl shadow-purple-900/50"
            />
          </motion.div>

          {/* Floating tech labels */}
          {floatingTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: tech.top,
                left: tech.left,
                right: tech.right,
                bottom: tech.bottom,
              }}
              className="absolute z-20 px-4 py-3 rounded-xl border border-purple-300/25 bg-[#17112b]/85 backdrop-blur-xl text-purple-200 text-sm shadow-xl shadow-purple-900/20"
            >
              ✦ {tech.name}
            </motion.div>
          ))}

          <div className="absolute bottom-0 right-0 px-5 py-4 rounded-2xl border border-white/10 bg-[#17112b]/90 backdrop-blur-xl">
            <p className="text-xs text-gray-400">FOCUSED ON</p>
            <p className="font-semibold text-purple-200 mt-1">
              Innovation & Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
