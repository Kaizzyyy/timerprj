import { FC } from "react";

interface TimerDescriptionInterface {
  timerName?: string;
  className?: string;
}

export const TimerDescription: FC<TimerDescriptionInterface> = ({
  timerName,
  className,
}) => {
  return <h1 className={className}>{timerName}</h1>;
};
