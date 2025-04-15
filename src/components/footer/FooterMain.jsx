// src/components/footer/FooterMain.jsx

import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  return (
    <div className="px-4">
      {/* Ligne de séparation */}
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* Contenu principal du footer */}
      <div className="flex flex-col sm:flex-row justify-between mt-4 max-w-[1200px] mx-auto items-center gap-4 text-center">
        <p className="text-3xl text-lightGrey">Jeremie Pivin</p>
        <ul className="flex gap-4 text-lightGrey text-xl flex-wrap justify-center">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Texte de copyright */}
      <p className="max-w-[1200px] mx-auto text-center mt-6 mb-12 text-sm text-lightBrown">
        © 2024 | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
