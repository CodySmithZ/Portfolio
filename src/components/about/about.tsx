import React from "react";
import AboutImage from "./aboutImage";

export default function About() {
  return (
    <div
      id={"about"}
      className={"skew-y-[9deg] bg-green-main-500 origin-top-left py-32"}
    >
      <div
        className={
          "-skew-y-[9deg] flex flex-row w-11/12 sm:w-9/12 lg:w-2/3 xl:w-1/2 mx-auto my-0 items-center"
        }
      >
        <div className="w-1/3 ">
          <AboutImage />
        </div>
        <div className={"flex flex-col text-text w-2/3 ml-4"}>
          <div className={"text-[28px] font-light"}>About</div>
          <div className={"font-extralight"}>
            Hi I am cody, I'm recent gradute with a passion for web development
            from the frontend to the backend. I enjoy learning new technologys
            that keep evolving how web development can be done.
          </div>
        </div>
      </div>
    </div>
  );
}
