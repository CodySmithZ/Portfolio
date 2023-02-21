import React from "react";
import Image from "next/image";
import SkillHover from "../skills/skillHover";
import Link from "next/link";

export default function Project(props: {
  name: string;
  description: string;
  skills: Array<{ skill: string; image: string }>;
  link: string;
  github: string;
  image: string;
}) {
  return (
    <div className="bg-green-main-500 rounded-xl lg:w-5/12 sm:w-7/12 w-11/12 mb-16 shadow-lg sha">
      <h1 className="font-light text-[28px] bg-green-main-600 w-full text-center rounded-t-xl mb-5 py-2">
        {props.name}
      </h1>
      <div className="flex flex-col items-center text-center justify-center px-5">
        <Image
          src={props.image}
          alt={props.name + " project"}
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
          className="rounded-xl shadow-md"
        />
        <div className="flex flex-row justify-between items-center w-2/5 sm:w-2/5 mt-7 mb-2">
          {props.skills.map((skill) => {
            return <SkillHover skill={skill.skill} image={skill.image} />;
          })}
        </div>
        <div className="font-extralight mt-0">{props.description}</div>
        <div className="flex flex-row justify-around mt-8 mb-3 w-full">
          <Link
            href={props.link}
            className="bg-green-main-100 hover:bg-green-main-200 px-16 pt-1 shadow-md pb-1 font-light rounded-md"
          >
            Visit
          </Link>
          <Link
            href={props.github}
            className="bg-black hover:bg-slate-900 px-16 pt-1 pb-1 shadow-md font-light rounded-md"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
