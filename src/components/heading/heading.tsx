import React, { useState } from "react";
import TypingEffect from "./typingEffect";

export default function Heading() {
  const [startSecondHeading, setStartSecondHeading] = useState(false);
  return (
    <div className={"bg-green-main-300 -skew-y-[9deg] origin-top-right"}>
      <div
        className={
          "skew-y-[9deg] flex flex-col align-middle justify-center text-[28px] text-text py-32"
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
          lines={["Welcome to my website", "portfolio"]}
          backspaces={[7]}
          speed={150}
          EOLpauseTime={1000}
          delayStart={1000}
          start={startSecondHeading}
        />
      </div>
    </div>
  );
}
