import { motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";
import { FadUp } from "../Hero/Hero";
import { LiaUserSolid } from "react-icons/lia";
import { FaLaptopFile } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-gray-200">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 py-14 md:py-24 md:px-0">
        {/* Banner image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="/dist/assets/cana.png"
            alt="Banner"
            className="w-[80%] max-w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-snug md:text-4xl"
            >
              Dimitrisation premier codeur
            </motion.h1>

            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadUp(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 sm:p-6 bg-[#f4f4f4] 
                           rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-xl sm:text-2xl" />
                <p className="text-base font-bold sm:text-lg">Développeur web</p>
              </motion.div>

              <motion.div
                variants={FadUp(0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 sm:p-6 bg-[#f4f4f4] 
                           rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <LiaUserSolid className="text-xl sm:text-2xl" />
                <p className="text-base font-bold sm:text-lg">Développeur web</p>
              </motion.div>

              <motion.div
                variants={FadUp(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 sm:p-6 bg-[#f4f4f4] 
                           rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaLaptopFile className="text-xl sm:text-2xl" />
                <p className="text-base font-bold sm:text-lg">Développeur web</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
