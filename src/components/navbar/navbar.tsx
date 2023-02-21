import React from "react";
import styles from "@/styles/styles.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <div className={"px-[20px]"}>
      <div
        className={
          "text-white flex flex-row justify-between font-extralight w-2/3 sm:w-8/12 md:w-1/2 lg:w-1/3 mt-5"
        }
      >
        <Link href={"#about"} scroll={false} className={"cursor-pointer"}>
          About
        </Link>
        <Link href={"#skills"} scroll={false} className={"cursor-pointer"}>
          Skills
        </Link>
        <Link href={"#projects"} scroll={false} className={"cursor-pointer"}>
          Projects
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
