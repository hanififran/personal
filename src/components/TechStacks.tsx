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
    <ScrollVelocity speed={40}>
      {stacks.map(({ icon, label }, idx) => (
        <div
          key={idx}
          className="flex gap-2 items-center shrink-0 border px-3 py-1 rounded-md shadow-sm bg-white"
        >
          {React.cloneElement(icon, { className: "text-2xl" })}
          <p className="font-bold text-sm whitespace-nowrap">{label}</p>
        </div>
      ))}
    </ScrollVelocity>
  );
};

export default TechStacks;
