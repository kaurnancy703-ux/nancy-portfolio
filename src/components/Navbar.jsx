function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          Nancy Kaur
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#home" className="text-gray-300 hover:text-purple-400">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-purple-400">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-purple-400">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-purple-400">
            Projects
          </a>

          <a href="#contact" className="text-gray-300 hover:text-purple-400">
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;