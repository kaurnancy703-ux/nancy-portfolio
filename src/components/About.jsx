import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[4px] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Building Technology That Creates Impact
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            I'm Nancy Kaur, a Computer Science Engineering student and
            aspiring Full Stack Developer with a strong focus on the MERN
            Stack. I enjoy transforming ideas into scalable web applications,
            solving real-world problems through technology, and continuously
            learning modern development practices.

            <br /><br />

            My interests include Full Stack Development, Artificial
            Intelligence, and Data Structures & Algorithms. I am currently
            building projects that combine modern web technologies with AI
            to create intelligent and user-friendly solutions.

            <br /><br />

            My goal is to become a highly skilled Software Engineer capable
            of building impactful products used by thousands of people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              🎓 Education
            </h3>

            <p className="text-gray-300">
              B.Tech in Computer Science Engineering with a strong interest
              in software development, problem-solving, and emerging
              technologies.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              💻 Development
            </h3>

            <p className="text-gray-300">
              Building full-stack applications using React, Node.js,
              Express.js, MongoDB, JavaScript, Tailwind CSS, and Java.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              🚀 Career Goal
            </h3>

            <p className="text-gray-300">
              To become a top-tier Full Stack Engineer and create innovative
              AI-powered products that deliver real value to users.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;