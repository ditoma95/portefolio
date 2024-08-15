import { motion } from "framer-motion"
import { FaRegEye } from "react-icons/fa"
import { TbUsersGroup } from "react-icons/tb"
const bgStyle  = {
    backgroundColor: "/dist/assets/Hero.png",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}



const Subscribe = () => {

    // const [showIcon, setShowIcon] = useState(false);

    // const handleClick = () => {
    //     setShowIcon(true);
    // };
    
  return (
    <section className="bg-[#f7f7f7]">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{opacity : 1}}
            style={bgStyle} className="container py-24 md:py-8">
            <div className="flex flex-col justify-center">
            
            <div className="flex flex-col gap-8 px-4 py-6 sm:flex-row">
   
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{opacity : 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="grid items-center w-full max-w-2xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg sm:grid-cols-2 sm:mb-0">
                     <div className="min-h-[280px] h-full overflow-hidden p-2">
                        <img src="/dist/assets/res1.png" className="object-cover w-full h-full" alt="Web design template" />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-semibold">Gestion de stade</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Il s&apos;agit d&apos;une application de vente de tickets pour les matches.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Cette application permet également de gérer aussi d&apos;autres événements parallèles.
                        </p>

                        <div className="flex items-center w-full px-4 py-2 mt-6 border border-gray-300 rounded-lg cursor-pointer">
                            <TbUsersGroup className="text-2xl font-bold" />
                            <div className="flex-1 ml-4">
                                <p className="text-sm font-semibold text-gray-800">Projet en équipe</p>
                            </div>

                            <div>
                                <FaRegEye />
                            </div>
                            
                        </div>
                    </div>
                </motion.div>


                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{opacity : 1, scale: 1 }}
                transition={{ duration: 1, ease : "circIn" }}
                className="grid items-center w-full max-w-2xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg sm:grid-cols-2 sm:mb-0">
                    <div className="min-h-[280px] h-full overflow-hidden p-2">
                        <img src="/dist/assets/res1.png" className="object-cover w-full h-full" alt="Web design template" />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-semibold">Transport commun</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Il s&apos;agit d&apos;une application de vente de tickets pour les matches.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Cette application permet également de gérer aussi d&apos;autres événements parallèles.
                        </p>

                        <div className="flex items-center w-full px-4 py-2 mt-6 border border-gray-300 rounded-lg cursor-pointer">
                            <TbUsersGroup className="text-2xl font-bold" />
                            <div className="flex-1 ml-4">
                                <p className="text-sm font-semibold text-gray-800">Projet en équipe</p>
                            </div>

                            <div>
                                <FaRegEye />
                            </div>
                            
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col gap-8 px-4 py-6 sm:flex-row">
   
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{opacity : 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="grid items-center w-full max-w-2xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg sm:grid-cols-2 sm:mb-0">
                    <div className="min-h-[280px] h-full">
                        <img src="https://readymadeui.com/cardImg.webp" className="object-cover w-full h-full" alt="Web design template" />
                    </div>

                     <div className="p-6">
                        <h3 className="text-xl font-semibold">Gestion de stade</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Il s&apos;agit d&apos;une application de vente de tickets pour les matches.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Cette application permet également de gérer aussi d&apos;autres événements parallèles.
                        </p>

                        <div className="flex items-center w-full px-4 py-2 mt-6 border border-gray-300 rounded-lg cursor-pointer">
                            <TbUsersGroup className="text-2xl font-bold" />
                            <div className="flex-1 ml-4">
                                <p className="text-sm font-semibold text-gray-800">Projet en équipe</p>
                            </div>

                            <div>
                                <FaRegEye />
                            </div>
                            
                        </div>
                    </div>
                </motion.div>


                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{opacity : 1, scale: 1 }}
                transition={{ duration: 1.5, ease : "easeInOut" }}
                className="grid items-center w-full max-w-2xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg sm:grid-cols-2 sm:mb-0">
                    <div className="min-h-[280px] h-full">
                        <img src="https://readymadeui.com/cardImg.webp" className="object-cover w-full h-full" alt="Web design template" />
                    </div>

                     <div className="p-6">
                        <h3 className="text-xl font-semibold">Gestion de stade</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Il s&apos;agit d&apos;une application de vente de tickets pour les matches.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            Cette application permet également de gérer aussi d&apos;autres événements parallèles.
                        </p>

                        <div className="flex items-center w-full px-4 py-2 mt-6 border border-gray-300 rounded-lg cursor-pointer">
                            <TbUsersGroup className="text-2xl font-bold" />
                            <div className="flex-1 ml-4">
                                <p className="text-sm font-semibold text-gray-800">Projet en équipe</p>
                            </div>

                            <div>
                                <FaRegEye />
                            </div>
                            
                        </div>
                    </div>
                </motion.div>
            </div>

            </div>
        </motion.div>
    </section>
  )
}

export default Subscribe