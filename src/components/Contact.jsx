
import { motion } from "framer-motion";
import {
  Mail,
  Code2,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    description: "View My Repositories",
    href: "https://github.com/kaurnancy703-ux",
    icon: Code2,
  },
  {
    name: "LinkedIn",
    description: "Connect With Me",
    href: "https://www.linkedin.com/in/nancy-kaur-0b1a90381",
    icon: Users,
  },
  {
    name: "Email",
    description: "Let's Start a Conversation",
    href: "mailto:kaurnancy703@gmail.com",
    icon: Mail,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-28 px-6 lg:px-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 rounded-full bg-purple-600/20 blur-[120px] top-10 left-1/4"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 rounded-full bg-blue-600/15 blur-[130px] bottom-0 right-0"
        />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-500/10 text-purple-300 text-xs tracking-[3px] uppercase mb-7"
          >
            <Sparkles size={14} />
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-7 text-gray-400 text-base md:text-lg leading-8"
          >
            Open to internships, full-stack development roles,
            freelance projects, and exciting opportunities in
            web development and AI.

            Let's create something meaningful together.
          </motion.p>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="mt-10">
            <motion.a
              href="mailto:kaurnancy703@gmail.com"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:shadow-[0_0_55px_rgba(139,92,246,0.55)] transition-shadow duration-300"
            >
              <Mail size={19} />
              Let's Talk

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-20"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-7 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/[0.07] hover:shadow-[0_15px_45px_rgba(139,92,246,0.12)]"
              >
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/25 transition-all duration-500" />

                <div className="relative flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-500/10 border border-purple-400/20 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-white">
                    {social.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {social.description}
                  </p>

                  <div className="h-px w-0 bg-gradient-to-r from-purple-400 to-blue-400 mt-5 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Availability indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mt-12 text-sm text-gray-400"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>

          Open to exciting opportunities
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
