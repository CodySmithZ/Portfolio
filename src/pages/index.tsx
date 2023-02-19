import React from "react";
import Heading from "@/components/heading/heading";
import About from "@/components/about/about";
import NavBar from "@/components/navbar/navbar";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#0e0f25]">
        <NavBar />
      </div>
      <div className="mt-18">
        <Heading />
      </div>
      <div className="mt-[250px]">
        <About />
      </div>
    </div>
  );
}
