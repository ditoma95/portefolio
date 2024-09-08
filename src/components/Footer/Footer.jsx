import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/*
  Heads up! 👋

*/}
      <hr />
      <footer className="p-6">
  <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
    <li>
      <a className="text-[#AFBFD9]" href="mailto:ditomakoutema8@gmail.com">ditomakoutema8@gmail.com</a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/dimitri.canadarus"
        rel="noreferrer"
        target="_blank"
        className=""
      >
        <span className="sr-only">Facebook</span>
        <FaFacebook className="text-2xl font-bold text-[#AFBFD9]" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/ditoma95"
        rel="noreferrer"
        target="_blank"
        className=""
      >
        <FaGithub className="text-2xl font-bold text-[#AFBFD9]" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/feed/"
        rel="noreferrer"
        target="_blank"
        className=""
      >
        <FaLinkedinIn className="text-2xl font-bold text-[#AFBFD9]" />
      </a>
    </li>
  </ul>
</footer>

    </div>
  );
};

export default Footer;
