import React from "react";
import Heading from "@/components/heading/heading";
import About from "@/components/about/about";
import NavBar from "@/components/navbar/navbar";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import { GetServerSideProps } from "next";
export default function Home({
  data,
}: {
  data: {
    name: string;
    link: string;
    image: string;
    github: string;
    description: string;
    skills: { skill: string; image: string }[];
  }[];
}) {
  return (
    <div className="flex flex-col bg-green-main-100">
      <div className="bg-green-main-100 h-10">
        <NavBar />
      </div>
      <div className="bg-green-main-100 ">
        <Heading />
      </div>
      <div className="bg-green-main-400 pt-32">
        <About />
      </div>
      <div className="bg-green-main-600 pt-32">
        <Skills />
      </div>
      <div className="bg-green-main-800 pt-20">
        <Projects data={data} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch json from gist
  // const res = await fetch(
  //   "https://gist.github.com/CodySmithZ/fcf4234261103c91b9d863838312d675"
  // );
  // const data: Array<Object> = await res.json();

  const data = [
    {
      name: "Countryle (Remake)",
      image: "/projects/countryle.bmp",
      description:
        "A wordle based game where you guess the country based on the image.",
      skills: [
        {
          skill: "NextJS",
          image: "/nextjs.svg",
        },
        {
          skill: "JavaScript",
          image: "/javascript.svg",
        },
        {
          skill: "TailwindCSS",
          image: "/tailwindcss.svg",
        },
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
        {
          skill: "Svelte",
          image: "/svelte.svg",
        },
        {
          skill: "JavaScript",
          image: "/javascript.svg",
        },
        {
          skill: "TailwindCSS",
          image: "/tailwindcss.svg",
        },
      ],
      link: "http://todolist.codysmith.me/",
      github: "https://github.com/CodySmithZ/TodoListSvelte",
    },
    {
      name: "My Portfolio",
      image: "/projects/Portfolio.png",
      description:
        "My portfolio to showcase of the projects I have completed and the skills I know.",
      skills: [
        {
          skill: "NextJS",
          image: "/nextjs.svg",
        },
        {
          skill: "TypeScript",
          image: "/typescript.svg",
        },
        {
          skill: "TailwindCSS",
          image: "/tailwindcss.svg",
        },
      ],
      link: "http://codysmith.me/",
      github: "https://github.com/CodySmithZ/Portfolio",
    },
  ];

  //return data as props
  return {
    props: {
      data: data,
    },
  };
};
