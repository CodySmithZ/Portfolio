import React from "react";
import Image from "next/image";
import SkillHover from "./skillHover";
export default function Skills() {
  const skills = [
    { skill: "React", image: "/react.svg" },
    { skill: "Next.js", image: "/nextjs.svg" },
    { skill: "TypeScript", image: "/typescript.svg" },
    { skill: "JavaScript", image: "/javascript.svg" },
    // { skill: "HTML", image: "/html.svg" },
    // { skill: "CSS", image: "/css-3.svg" },
    { skill: "Git", image: "/git.svg" },
    { skill: "TailwindCSS", image: "/tailwindcss.svg" },
    { skill: "Svelte", image: "/svelte.svg" },
    { skill: "MySQL", image: "/mysql.svg" },
  ];
  return (
    <div className={"-skew-y-[9deg] bg-green-main-700 origin-top-right py-32"}>
      <div className={"skew-y-[9deg] flex flex-row justify-center"}>
        <div
          className={
            "flex flex-col text-text w-1/2 ml-4 justify-center items-center"
          }
        >
          <div className={"text-[28px] font-light mb-5"}>Skills</div>
          <div className="flex flex-row justify-around items-center w-full">
            {skills.map((skill) => (
              <SkillHover skill={skill.skill} image={skill.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}