import { FC } from "react";

interface CounterInterface {
  time: number;
  className?: string;
}

export const Counter: FC<CounterInterface> = ({ time, className }) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(0, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return <h2 className={className}>{convertTimeToHHMMSS(time)}</h2>;
};
