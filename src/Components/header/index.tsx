import { useContext } from "react";
import styled from "styled-components";

import { LanguageContext, ThemeContext } from "../../App";
import { Button } from "../buttons";

import { translation } from "../../translation/translation";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;

  width: 630px;
  padding: 5px;
  margin: 10px;
`;

export const Header = () => {
  const languageContext = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  
  return (
    <StyledHeader>
      <Wrapper>
        <Button
          onClick={languageContext.changeLanguage}
          text={translation(languageContext.language, "language")}
        />
        <Button
          onClick={themeContext.changeTheme}
          text={translation(languageContext.language, "theme")}
        />
      </Wrapper>
    </StyledHeader>
  );
};
