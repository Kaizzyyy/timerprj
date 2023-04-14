import { Button } from "../buttons";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../../App";
import { translation } from "../../translation/translation";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
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
