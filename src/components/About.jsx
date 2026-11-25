
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Computer Science Engineering student with a foundation in software development, programming, and problem-solving.",
    number: "01",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building full-stack web applications using React, JavaScript, Node.js, Express.js, MongoDB, and modern development tools.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Exploring AI-powered applications, intelligent automation, and technologies that solve meaningful real-world problems.",
    number: "03",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[5px] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
            I turn ideas into
            <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-9 max-w-4xl">
            I'm Nancy Kaur, a Full Stack Web Developer passionate about
            building modern, scalable, and user-focused web applications.

            <br /><br />

            I work across frontend and backend technologies, combining
            React, JavaScript, Node.js, Express.js, and MongoDB to
            develop complete web solutions.

            <br /><br />

            I also explore AI-powered applications, intelligent
            automation, and emerging technologies to solve real-world
            problems. My focus is on writing clean code, creating
            exceptional user experiences, and building products that
            deliver meaningful impact.
          </p>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 mt-8 text-purple-300 hover:text-white transition-colors"
          >
            Explore my work
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-400/40 transition-colors duration-300"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-300 group-hover:bg-purple-500/25 transition-colors">
                    <Icon size={27} />
                  </div>

                  <span className="text-gray-600 text-sm">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>

                <div className="w-10 h-1 bg-purple-500/60 rounded-full mt-8 group-hover:w-20 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-4 items-center text-gray-400"
        >
          <Sparkles size={18} className="text-purple-400" />
          <span className="text-sm">
            Building, learning, experimenting and creating.
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
