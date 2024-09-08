import { motion } from "framer-motion";
import { FadUp } from "../Hero/Hero";

// Liste des compétences
const skills = [
  "PHP", "Python", "Dart", "Js", "HTML", "CSS",
  "React. js", "Tailwind CSS", "SQL", "Laravel", "Django",
  "Flutter", "Git", "GitHub", "Linux", "Bash",
  "Socket. io", "Adobe PS", "Adobe Ai", "Créateur contenu youtube"
];

const SkillCard = ({ skill }) => (
  <motion.div
    variants={FadUp(0.2)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="flex items-center gap-4 p-4 text-[20px] bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
  >
    <p className="text-base font-bold sm:text-md">{skill}</p>
  </motion.div>
);

const Skill = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 py-14 md:py-24 md:px-0">
      
        <div className="container flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="/dist/assets/cana.png"
            alt="Skill"
            className="w-[80%] max-w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Skill Text */}
        <div className="container flex flex-col justify-center">
          <div className="space-y-8 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-snug md:text-4xl text-[#F0BFDB]"
            >
              Technologie que j'utilise
            </motion.h1>

            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
