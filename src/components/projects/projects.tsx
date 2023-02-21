import React, { useEffect, useState } from "react";
import Project from "./project";

export default function Projects() {
  const [height, setHeight] = useState(0);

  const projects = [
    {
      name: "Countryle (Remake)",
      image: "/projects/countryle.bmp",
      description:
        "A wordle based game where you guess the country based on the image.",
      skills: [
        { skill: "Nextjs", image: "/nextjs.svg" },
        { skill: "JavaScript", image: "/javascript.svg" },
        { skill: "TailwindCSS", image: "/tailwindcss.svg" },
      ],
      link: "http://countryle.codysmith.me/",
      github: "https://github.com/CodySmithZ/Countryle",
    },
    {
      name: "Todo List",
      image: "/projects/todolist.bmp",
      description:
        "A Simple todo list made with Svelte, to demonstrate my ability to learn another framework for my personal portfolio.",
      skills: [
        { skill: "Svelte", image: "/svelte.svg" },
        { skill: "JavaScript", image: "/javascript.svg" },
        { skill: "TailwindCSS", image: "/tailwindcss.svg" },
      ],
      link: "http://todolist.codysmith.me/",
      github: "https://github.com/CodySmithZ/TodoListSvelte",
    },
    {
      name: "Todo List",
      image: "/projects/todolist.bmp",
      description:
        "A Simple todo list made with Svelte, to demonstrate my ability to learn another framework for my personal portfolio.",
      skills: [
        { skill: "Svelte", image: "/svelte.svg" },
        { skill: "JavaScript", image: "/javascript.svg" },
        { skill: "TailwindCSS", image: "/tailwindcss.svg" },
      ],
      link: "http://todolist.codysmith.me/",
      github: "https://github.com/CodySmithZ/TodoListSvelte",
    },
  ];

  //Set height of projects section based on window width
  const setHeightEvent = () => {
    let width = window.innerWidth;
    console.log(width);
    const angle = 11;

    //Convert angle to radians
    const radians = (angle * Math.PI) / 180;
    //Calculate hypotenuse
    let hypetenuse = width / Math.cos(radians);
    //Calculate opposite
    let opposite = Math.sqrt(Math.pow(hypetenuse, 2) - Math.pow(width, 2));
    console.log(hypetenuse, opposite, width);
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
    <div id="projects" className="flex justify-center">
      <div
        className={
          "flex flex-row flex-wrap xl:w-10/12 sm:w-12/12 justify-around "
        }
        style={{ marginTop: height + "px" }}
      >
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              link={project.link}
              image={project.image}
              skills={project.skills}
              github={project.github}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
