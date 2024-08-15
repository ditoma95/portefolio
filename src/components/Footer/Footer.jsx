import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <footer className="bg-white animate-pulse">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center font-bold text-xl text-[#135fd9] sm:justify-start">
              Développeur Web & Mobile Passionné
              </div>

              <p className="max-w-md mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:text-left">
              Avec une solide formation en mathématiques et en génie logiciel, je combine rigueur analytique et expertise technique pour créer des applications web et mobiles performantes. Fort de plusieurs projets réussis et de compétences polyvalentes, je me spécialise dans le développement de solutions intuitives et fonctionnelles.
              </p>

              
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                      Company History
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Mes services
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                      Création application web
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Création application Mobile
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Création site vitrine
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                    Conseils achats pc
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Helpful Links
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Me contacter</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900 size-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span >
                        <a className="flex-1 text-gray-700" href="mailto:ditomakoutema8@gmail.com">ditomakoutema8@gmail.com</a>
                      </span>

                      
                      
                    </a>
                  </li>
                </ul>
                <ul className="flex justify-center gap-6 mt-8 sm:justify-start md:gap-8">
                  <li>
                    <a href="https://www.facebook.com/dimitri.canadarus" rel="noreferrer" target="_blank" className="text-blue-700 transition hover:blue-teal-700/75" >
                      <span className="sr-only">Facebook</span>
                      <FaFacebook  className="text-2xl font-bold"/>
                    </a>
                  </li>

                  <li>

                    <a href="https://github.com/ditoma95" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" >
                      <FaGithub className="text-2xl font-bold "/>
                    </a>
                  </li>

                  <li>

                    <a href="https://www.linkedin.com/feed/" rel="noreferrer" target="_blank" className="text-blue-700 transition hover:text-gray-700/75" >
                      <FaLinkedinIn className="text-2xl font-bold "/>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
