import React, { useEffect, useState } from "react";
import Project from "./project";
import { GetServerSideProps } from "next";

export default function Projects(props: {
  data: {
    name: string;
    link: string;
    image: string;
    github: string;
    description: string;
    skills: { skill: string; image: string }[];
  }[];
}) {
  const [height, setHeight] = useState(0);

  //Set height of projects section based on window width
  const setHeightEvent = () => {
    let width = window.innerWidth;
    const angle = 11;

    //Convert angle to radians
    const radians = (angle * Math.PI) / 180;
    //Calculate hypotenuse
    let hypetenuse = width / Math.cos(radians);
    //Calculate opposite
    let opposite = Math.sqrt(Math.pow(hypetenuse, 2) - Math.pow(width, 2));
    setHeight(opposite);
  };

  //Add event listener on mount and remove on unmount
  useEffect(() => {
    setHeightEvent();
    window.addEventListener("resize", setHeightEvent);
    return () => {
      window.removeEventListener("resize", setHeightEvent);
    };
  }, []);

  return (
    <div id="projects" style={{ marginTop: height + "px" }}>
      <h1 className={"text-[28px] font-light text-center mb-20"}>Projects</h1>
      <div className="flex justify-center">
        <div
          className={
            "flex flex-row flex-wrap xl:w-10/12 sm:w-12/12 justify-around "
          }
        >
          {props.data?.map((project, index) => {
            return (
              <Project
                name={project.name}
                link={project.link}
                image={project.image}
                skills={project.skills}
                github={project.github}
                description={project.description}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
