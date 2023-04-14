import { FC, useContext } from "react";

import { LanguageContext } from "../../App";
import { translation } from "../../translation/translation";

import { Timer } from "../timer/Timer";

interface MainInterface {
  timerName?: string;
  time?: number;
}
export const Main: FC<MainInterface> = ({ time, timerName }) => {
  const languageContext = useContext(LanguageContext);
  return (
    <>
      <Timer
        time={0}
        timerName={translation(languageContext.language, "theory")}
      />
      <Timer
        time={0}
        timerName={translation(languageContext.language, "practice")}
      />
      <Timer time={0} />
    </>
  );
};
