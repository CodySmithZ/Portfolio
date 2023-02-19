import React from "react";
import AboutImage from "./aboutImage";

export default function About() {
  return (
    <div className={"skew-y-[9deg] bg-green-main-500 origin-top-left py-32"}>
      <div className={"-skew-y-[9deg] flex flex-row justify-center"}>
        <div className=" ">
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
