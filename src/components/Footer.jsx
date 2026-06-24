function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h3 className="text-xl font-bold text-white">
              Nancy Kaur
            </h3>

            <p className="text-gray-400 mt-2">
              Full Stack Developer | MERN Stack | AI Enthusiast
            </p>
          </div>

          <div className="flex gap-6">

            <a
              href="https://github.com/kaurnancy703-ux"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nancy-kaur-0b1a90381"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kaurnancy703@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              Email
            </a>

          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Nancy Kaur. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;