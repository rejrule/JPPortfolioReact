// src\components\aboutMeSection\AboutMeText.jsx

import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Jeremie, a fullstack developer with a military background and a passion for building meaningful digital tools. I take a steady and thoughtful approach to learning and coding, focusing on quality, clarity, and clean architecture.
      </p>
      <br />
      <p>
        I thrive in quiet, focused environments where I can go deep into the work, but I’m also a reliable team player who values clear communication and shared goals. I enjoy contributing on both the front-end and back-end, crafting clean interfaces and solid, maintainable logic.
      </p>
      <br />
      <p>
        My journey into tech is guided by discipline, precision, and a desire to create code that lasts. I'm still growing, but every line I write reflects care, structure, and purpose.
      </p>


      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
