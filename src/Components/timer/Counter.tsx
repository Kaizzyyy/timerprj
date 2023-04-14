import { FC } from "react";

interface CounterInterface {
  time: number;
}

export const Counter: FC<CounterInterface> = ({ time }) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(0, 0, 0, 0, 0, time, 0).toLocaleDateString();
  };

  return <h2>{convertTimeToHHMMSS(time)}</h2>;
};
