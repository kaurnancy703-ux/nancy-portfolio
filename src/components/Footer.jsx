
import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Mail,
  ArrowUp,
} from "lucide-react";

const footerLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kaurnancy703-ux",
    icon: Code2,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nancy-kaur-0b1a90381",
    icon: Users,
  },
  {
    name: "Email",
    href: "mailto:kaurnancy703@gmail.com",
    icon: Mail,
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-40 bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <a href="#" className="inline-block group">
              <h3 className="text-2xl font-bold tracking-wide text-white">
                NANCY KAUR
                <span className="text-purple-400">.</span>
              </h3>
            </a>

            <p className="text-gray-400 mt-2 text-sm">
              Full Stack Web Developer | MERN Stack | AI Enthusiast
            </p>

            <p className="text-gray-500 text-xs mt-3">
              Building ideas into digital experiences.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={
                    link.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={link.name}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/15 transition-all duration-300"
                >
                  <Icon size={19} />

                  <span className="absolute -bottom-6 text-[10px] text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

        </div>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Nancy Kaur. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Crafted with React, Tailwind CSS & Framer Motion.
          </p>

          <motion.a
            href="#"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-300 text-xs transition-colors"
          >
            Back to top
            <ArrowUp size={15} />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;