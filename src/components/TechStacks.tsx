import { FaReact, FaLaravel, FaPhp, FaDocker, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React from "react";
import ScrollVelocity from "./animation/ScrollVelocity";

const TechStacks = () => {
  const stacks = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaLaravel />, label: "Laravel" },
    { icon: <SiCodeigniter />, label: "CodeIgniter" },
    { icon: <IoLogoJavascript />, label: "Javascript" },
    { icon: <SiTypescript />, label: "Typescript" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaPhp />, label: "PHP" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <FaDocker />, label: "Docker" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="title dark:text-white">Languages, Frameworks, Tools, Libraries</p>
      <div className="flex justify-between w-[250px] lg:w-[calc(100dvh-12rem)] gap-2 mt-5">
        <ScrollVelocity speed={40}>
          {stacks.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="flex gap-2 items-center shrink-0 border dark:border-white px-3 py-1 rounded-md shadow-sm bg-white dark:bg-black"
            >
              {React.cloneElement(icon, { className: "text-2xl dark:text-white" })}
              <p className="font-bold text-sm whitespace-nowrap dark:text-white">{label}</p>
            </div>
          ))}
        </ScrollVelocity>
      </div>
    </div>
  );
};

export default TechStacks;
