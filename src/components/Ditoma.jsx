import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Hero from "./Hero/Hero";
import Projets from "./Projets/Projets";
import Skill from "./Skills/Skill";
import Footer from "./Footer/Footer";
import { useState } from "react";

const Ditoma = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer la visibilité du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mb-20 bg-[#70372C]">
        <nav className="fixed top-0 left-0 right-0 z-20 bg-[#70372C]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container flex items-center justify-between py-5 bg-[#70372C]"
          >
            {/* Logo section */}
            <div>
              <h1 className="text-2xl font-bold text-[#F0BFDB]">Ditoma</h1>
            </div>

            {/* Menu section (Desktop) */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-3">
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB]">
                  <NavLink to={'/'}>Accueil</NavLink>
                </li>
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB]">
                  <NavLink to={'/cv'}>CV</NavLink>
                </li>
                <li className="relative inline-block hover:text-[#AFBFD9] group text-[#F0BFDB]">
                  <NavLink to={'/acceuil'}>Contact</NavLink>
                </li>
              </ul>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden">
              <IoMdMenu
                className="text-4xl text-[#F0BFDB] hover:text-blue-600 hover:shadow-2xl hover:scale-100 cursor-pointer"
                onClick={toggleMenu} 
              />
            </div>
          </motion.div>

          {/* Menu (Mobile) */}
          {isMenuOpen && (
            <div className="bg-[#70372C] lg:hidden">
              <ul className="px-6">
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB]">
                  <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
                </li>
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB]">
                  <NavLink to={'/cv'} onClick={() => setIsMenuOpen(false)}>CV</NavLink>
                </li>
                <li className="hover:text-[#AFBFD9] hover:bg-slate-600 hover:p-2 rounded-2xl hover:cursor-pointer transition-all group py-1 text-[#F0BFDB]">
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
