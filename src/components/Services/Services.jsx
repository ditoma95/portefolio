import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Développement web",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Développement mobile",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Création des sites vitrines",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Création de portfolio",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Conseil pour l'achat de PC",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Support 24/7",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-gray-200 from-indigo-50 to-indigo-100">
      <div className="container pt-16 mx-auto pb-14">
        <h1 className="pb-10 text-4xl font-extrabold text-left text-gray-800">
          Services que je fournis
        </h1>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              key={service.id}
              className="flex flex-col items-center justify-center gap-4 p-6 py-8 transition-all duration-300 ease-in-out transform bg-white shadow-lg rounded-2xl hover:bg-indigo-50 hover:scale-105"
            >
              <div className="mb-4 text-5xl text-[#CA9EB5]">
                {service.icon}
              </div>
              <h1 className="text-lg font-semibold text-gray-700">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
