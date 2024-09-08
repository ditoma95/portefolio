import {motion } from "framer-motion";
import Typed from 'typed.js';
import { useEffect } from "react";

export const FadUp = (delay)=>{
  return {
    initial: {opacity : 0, y: 50},
    animate : { opacity : 1,y: 0,
      transition : {type : "spring", stiffness : 100, duration : 0.5, delay : delay, ease : "easeInOut",}
    }
  }
}


const Hero = () => {

  useEffect(()=>{
    const options = {
      strings: ["Developpeur FullStack web.","Concepteur des sites vitrines", "Developpeur FullStack mobile"],
      typeSpeed: 100
    };

    const typed = new Typed('.element', options);

    return ()=>{
      typed.destroy();
    };
  }, [])


  return (
    <section className="relative z-0 overflow-hidden ">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[60px]">
        {/* Brand info */}
        <div className="relative z-20 flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
             variants={FadUp(0.6)}
             initial="initial"
             animate="animate"

             className="text-3xl lg:text-4xl font-bold !leading-snug">
              
              <div className="flex items-center gap-2 text-[#AFBFD9]">
                <h1>Je </h1>
                <h1 className="">suis </h1>
                <h1 className="">Ditoma</h1>
                <h1> {" :  "}</h1>
              </div>
               
              <span className="italic text-[#AFBFD9] element"></span> 
              
              
            </motion.h1>
          </div>
        </div>

        {/* image */}
        <div className="flex items-center justify-center">
           <motion.img
           initial={{ x:50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" src="/dist/assets/Hero.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero