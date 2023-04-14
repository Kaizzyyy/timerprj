import { FC, useContext } from "react";
import styled from "styled-components";

import { LanguageContext } from "../../App";
import { translation } from "../../translation/translation";

import { Timer } from "../timer/Timer";

const PrimaryTimer = styled(Timer)`
  font-size: 96px;
  margin: 46px 0px 58px 16px;
`;

const SecondaryTimer = styled(Timer)`
  font-size: 32px;
  margin: 0px 10px 10px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  padding: 5px;
  margin: 10px;
`;

const StyledMainButton = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Main = () => {
  const languageContext = useContext(LanguageContext);

  return (
    <div>
      <Wrapper>
        <TimerWrapper>
          <SecondaryTimer
            time={0}
            timerName={translation(languageContext.language, "theory")}
          />
          <SecondaryTimer
            time={0}
            timerName={translation(languageContext.language, "practice")}
          />
        </TimerWrapper>
        <PrimaryTimer time={0} />
      </Wrapper>
      <StyledMainButton>
        <ButtonRow></ButtonRow>
        <ButtonRow></ButtonRow>
      </StyledMainButton>
    </div>
  );
};
