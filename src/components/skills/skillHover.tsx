import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function SkillHover(props: {
  skill: string;
  image: string;
  hover: boolean;
  userIsHovering?: (isHovering: boolean) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(props.hover);
  }, [props.hover]);

  useEffect(() => {
    props.userIsHovering;
  }, [isHovered]);

  const enter = () => {
    setIsHovered(true);
    if (props.userIsHovering) {
      props.userIsHovering(true);
    }
  };

  const exit = () => {
    setIsHovered(false);
    if (props.userIsHovering) {
      props.userIsHovering(false);
    }
  };
  return (
    <div
      onMouseEnter={() => enter()}
      onMouseLeave={() => exit()}
      className={`
      ${isHovered ? "scale-[1.75]" : ""} 
      transition-all duration-500 flex flex-col items-center justify-between w-8
      `}
    >
      <Image
        src={props.image}
        alt={props.skill}
        width={0}
        height={0}
        style={{ width: "auto", height: "auto" }}
      />
      <div
        className={`
        ${isHovered ? "opacity-100" : "opacity-0"}
        transition-opacity duration-500 font-extralight text-sm
      `}
      >
        {props.skill}
      </div>
    </div>
  );
}
