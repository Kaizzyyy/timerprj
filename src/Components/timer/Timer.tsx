import { FC } from "react";
import styled from "styled-components";

import { Counter } from "./Counter";
import { TimerDescription } from "./TimerDescription";

const StyledTimerDescription = styled(TimerDescription)`
  margin: 0px 0px 10px 0px;
  color: #ffd600;
`;

interface TimerInterface {
  timerName?: string;
  time: number;
  className?: string;
}

export const Timer: FC<TimerInterface> = ({ time, timerName, className }) => {
  return (
    <>
      <StyledTimerDescription timerName={timerName} />
      <Counter time={time} className={className}/>
    </>
  );
};
