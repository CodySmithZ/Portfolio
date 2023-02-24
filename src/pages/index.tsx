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
  const res = await fetch(
    "https://gist.github.com/CodySmithZ/fcf4234261103c91b9d863838312d675"
  );
  const data: Array<Object> = await res.json();

  //return data as props
  return {
    props: {
      data: data,
    },
  };
};
