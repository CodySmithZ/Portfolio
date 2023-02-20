import React from "react";
import styles from "@/styles/styles.module.css";

function NavBar() {
  return (
    <div className={"px-[20px]"}>
      <div
        className={
          "text-white flex flex-row justify-between font-extralight w-2/3 sm:w-8/12 md:w-1/2 lg:w-1/3 mt-5"
        }
      >
        <div className={"cursor-pointer"}>Home</div>
        <div className={"cursor-pointer"}>About</div>
        <div className={"cursor-pointer"}>Projects</div>
      </div>
    </div>
  );
}

export default NavBar;
