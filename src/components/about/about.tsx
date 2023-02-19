import React from "react";
import AboutImage from "./aboutImage";

export default function About() {
  return (
    <div
      className={
        "skew-y-[9deg] bg-gradient-to-r from-[#1d2a4e] to-[#4e63b8] origin-top-left"
      }
    >
      <div
        className={"-skew-y-[9deg] flex flex-row w-3/4 mx-auto justify-center"}
      >
        <div className=" flex mb-20 bg-red-900">
          <AboutImage />
        </div>
        <div className={"flex flex-col text-text w-1/2 ml-4"}>
          <div className={"text-[28px] "}>About</div>
          <div className={"font-light"}>
            Praesent posuere quis velit et laoreet. Donec semper efficitur
            lorem, quis euismod nisl porta non. Suspendisse potenti. Donec arcu
            mauris, ornare ut congue vel, scelerisque nec velit. Cras cursus
            porta ligula vulputate volutpat. Duis laoreet sagittis tincidunt
          </div>
        </div>
      </div>
    </div>
  );
}
