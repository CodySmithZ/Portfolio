import React from "react";
import Image from "next/image";

export default function AboutImage() {
  return (
    <Image
      src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
      width={150}
      height={150}
      className={"rounded-full"}
      alt="profile picture"
    />
  );
}
