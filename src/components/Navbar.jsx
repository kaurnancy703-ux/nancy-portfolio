
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu after selecting a navigation link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#090817]/85 backdrop-blur-2xl"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl md:text-2xl font-bold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded"
        >
          NANCY KAUR<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm text-gray-300 hover:text-purple-300 transition-colors duration-300 group"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full border border-purple-400/40 text-purple-200 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 text-sm"
        >
          My Resume ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
        >
          <span className="relative w-6 h-5 flex flex-col justify-center items-center">
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              className="absolute w-6 h-[2px] bg-white rounded-full"
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
                x: menuOpen ? 10 : 0,
              }}
              className="absolute w-6 h-[2px] bg-white rounded-full"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 6 }
              }
              className="absolute w-6 h-[2px] bg-white rounded-full"
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#090817]/95 backdrop-blur-2xl"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                  },
                },
              }}
              className="flex flex-col px-6 sm:px-8 py-5 gap-1"
            >
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center py-3 px-3 rounded-xl text-gray-300 hover:text-white hover:bg-purple-500/10 active:bg-purple-500/20 transition-all duration-200 text-base"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-purple-900/20 hover:shadow-purple-500/30 transition-all duration-300"
              >
                Download My Resume
                <span>↗</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;