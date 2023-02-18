import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";

function TypingEffect(props: {
  delayStart: any;
  lines: any[];
  speed: number;
  EOLpauseTime: any;
  backspaces: number[];
  start: unknown;
  getRunTime?: (arg0: any) => void;
  isComplete?: (arg0: boolean) => void;
  hideCursorOnComplete?: boolean;
}) {
  const [displayWord, setDisplayWord] = useState("");
  const [started, setStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const run = () => {
    setStarted(true);
    let tempWord = "";

    //Time to execute timeout function
    let execTime = props.delayStart;

    //Loop over each Line
    for (let lineIndex in props.lines) {
      //Loop over each letter
      for (let letterIndex in props.lines[lineIndex]) {
        //Timeout funciton to wait to update displaywork
        setTimeout(() => {
          //Appended letter to text already displayed
          tempWord += props.lines[lineIndex][letterIndex];
          setDisplayWord(tempWord);
        }, execTime);
        execTime += props.speed;
      }

      //Add end of line pause time
      execTime += props.EOLpauseTime;

      //Loop over backspaces for this line
      for (let i = 0; i < props.backspaces[lineIndex]; i++) {
        setTimeout(() => {
          tempWord = tempWord.slice(0, -1);
          setDisplayWord(tempWord);
        }, execTime);
        execTime += props.speed;
      }
    }
    //Set timeout to change start state
    setTimeout(
      () => {
        setIsComplete(true);
        setStarted(false);
      },
      execTime > props.speed ? (execTime -= props.speed) : execTime
    );
  };

  //Work out total run time
  const getRunTime = () => {
    let totalTime = props.delayStart;

    //Loop over each Line
    for (let lineIndex in props.lines) {
      //Loop over each letter
      for (let letterIndex in props.lines[lineIndex]) {
        totalTime += props.speed;
      }

      //Add end of line pause time
      totalTime += props.EOLpauseTime;

      //Loop over backspaces for this line
      for (let i = 0; i < props.backspaces[lineIndex]; i++) {
        totalTime += props.speed;
      }
    }
    return totalTime;
  };

  useEffect(() => {
    if (props.start && !started) {
      run();
    }
  }, [props.start]);

  useEffect(() => {
    if (props.getRunTime) {
      props.getRunTime(getRunTime());
    }
  });

  useEffect(() => {
    if (props.isComplete) {
      props.isComplete(isComplete);
    }
  }, [isComplete]);

  return (
    <div className={"overflow-hidden w-fit flex mx-auto"}>
      {displayWord}
      {isComplete ? (
        <div className={""}></div>
      ) : (
        <div className={"typing"}></div>
      )}
    </div>
  );
}

export default TypingEffect;
