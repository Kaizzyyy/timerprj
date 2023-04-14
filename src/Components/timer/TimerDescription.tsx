import { FC } from "react";

interface TimerDescriptionInterface {
   timerName?: string;
  }
  export const TimerDescription: FC<TimerDescriptionInterface> = ({timerName }) => {
    return <h1>{timerName}</h1>;
  };
  