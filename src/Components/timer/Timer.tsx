import { FC } from "react";

import { Counter } from "./Counter";
import { TimerDescription } from "./TimerDescription";

interface TimerInterface {
  timerName?: string;
  time: number;
}
export const Timer: FC<TimerInterface> = ({ time, timerName }) => {
  return (
    <>
      <TimerDescription timerName={timerName}/>
      <Counter time={time} />
    </>
  );
};
