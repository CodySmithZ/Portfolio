import React, { useState } from "react";
import TypingEffect from "./typingEffect";

export default function Heading() {
  const [startSecondHeading, setStartSecondHeading] = useState(false);
  return (
    <div
      className={
        "bg-gradient-to-r from-[#1d2a4e] to-[#4e63b8] -skew-y-[11deg] mt-80"
      }
    >
      <div
        className={
          "skew-y-[11deg] flex flex-col align-middle justify-center text-[28px] text-text py-32"
        }
      >
        <TypingEffect
          lines={["Hello World!", ", I'm Cody :)", "😊"]}
          backspaces={[7, 2]}
          speed={150}
          EOLpauseTime={1000}
          delayStart={0}
          start={true}
          isComplete={(res) => setStartSecondHeading(res)}
          hideCursorOnComplete={true}
        />
        <TypingEffect
          lines={["Welcome to my website"]}
          backspaces={[]}
          speed={150}
          EOLpauseTime={1000}
          delayStart={0}
          start={startSecondHeading}
        />
      </div>
    </div>
  );
}
