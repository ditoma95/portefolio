import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Hero from "./Hero/Hero";
import Projets from "./Projets/Projets";
import Skill from "./Skills/Skill";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Ditoma = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark bg-gray-900" : "bg-white"}>
      <div className="mb-20 bg-[#70372C] dark:bg-gray-800">
        <nav className="fixed top-0 left-0 right-0 z-20 bg-[#70372C] dark:bg-gray-800">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container flex items-center justify-between py-5"
          >
            {/* Logo section */}
            <div>
              <h1 className="text-2xl font-bold text-[#F0BFDB] dark:text-white">Ditoma</h1>
            </div>

            {/* Menu section (Desktop) */}
            <div className="items-center hidden gap-6 lg:flex">
              <ul className="flex items-center gap-3">
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/'}>Accueil</NavLink>
                </li>
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/cv'}>CV</NavLink>
                </li>
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/acceuil'}>Contact</NavLink>
                </li>
              </ul>

              
              <button onClick={toggleTheme}>
                {isDarkMode ? (
                  <FaSun className="text-2xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-2xl text-blue-400" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="flex items-center gap-6 lg:hidden">
              <IoMdMenu
                className="text-4xl text-[#F0BFDB] dark:text-white cursor-pointer"
                onClick={toggleMenu}
              />
              {/* Bouton mobile pour basculer le thème */}
              <button onClick={toggleTheme}>
                {isDarkMode ? (
                  <FaSun className="text-2xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-2xl text-blue-400" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Menu (Mobile) */}
          {isMenuOpen && (
            <div className="bg-[#70372C] dark:bg-gray-800 lg:hidden">
              <ul className="px-6">
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
                </li>
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/cv'} onClick={() => setIsMenuOpen(false)}>CV</NavLink>
                </li>
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB] dark:text-white">
                  <NavLink to={'/acceuil'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {/* Sections */}
      <div>
        <Hero />
      </div>
      <div>
        <Projets />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Ditoma;
