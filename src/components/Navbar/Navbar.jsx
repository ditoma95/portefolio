import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title : "Accueil",
    link: "/",
  },
  {
    id: 2,
    title : "Projets",
    link: "",
  },
  {
    id: 3,
    title : "Mon cv",
    link: "",
  },
  {
    id: 4,
    title : "Contact",
    link: "",
  },
  // {
  //   id: 5,
  //   title : "Contact Us",
  //   link: "",
  // },
]

const Navbar = () => {
  return (
    <nav className="relative z-20">
        <motion.div 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y:0}}
        className="container flex items-center justify-between py-10">
            {/* Logo section */}
            <div>
                <h1 className="text-2xl font-bold text-[#b82872]">Ditoma</h1>
            </div>
            {/* Menu section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-3">
                    {
                        NavbarMenu.map((menu)=>(
                            <li key={menu.id}>
                                <a className="relative inline-block px-3 py-2 hover:text-secondary group" href="{menu.path}">{menu.title}
                                    <div className="absolute bottom-0 hidden w-2 h-2 mr-2 -translate-x-1/2 rounded-full bg-secondary left-1/2 top-1/2 group-hover:block"></div>
                                </a>
                            </li>
                        ))
                    }

                    {/* <button className="primary-btn">Sign In</button> */}
                </ul>
            </div>

            {/* Mobile Hamburger menu section */}
            <div className="lg:hidden">
                <IoMdMenu className="text-4xl"/>
            </div>
        </motion.div>
    </nav>
  )
}

export default Navbar