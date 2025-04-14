// src/components/experienceSection/ExperienceTopLeft.jsx

import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-[25%]">

      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        CodeBoxx Program
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="16" text="Modules" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="Fullstack" text="Projects" />
      </div>
      <p className="text-center">
        Completed an intensive web development training covering front-end,
        back-end, and fullstack projects.
      </p>
      <ExperienceInfo number="2024" text="Cohort" />
    </div>
  );
};

export default ExperienceTopLeft;
