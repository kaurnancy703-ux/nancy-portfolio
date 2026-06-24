import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400 uppercase tracking-[4px] mb-3"
        >
          Contact
        </motion.p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-300 mb-12 text-lg">
          Open to internships, full-stack development roles, freelance projects,
          and exciting opportunities in web development and AI.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:kaurnancy703@gmail.com"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              📧 Email
            </h3>

            <p className="text-gray-400 break-all">
              kaurnancy703@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kaurnancy703-ux"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              💻 GitHub
            </h3>

            <p className="text-gray-400">
              View My Repositories
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nancy-kaur-0b1a90381"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              💼 LinkedIn
            </h3>

            <p className="text-gray-400">
              Connect With Me
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;