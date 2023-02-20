import React from "react";
import Heading from "@/components/heading/heading";
import About from "@/components/about/about";
import NavBar from "@/components/navbar/navbar";
import Skills from "@/components/skills/skills";
export default function Home() {
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
    </div>
  );
}
