import { createContext, useState } from "react";
import { Header } from "./Components/header";
import { GlobalStyles } from "./GlobalStyles";
import { Language } from "./translation/translation";
import { Main } from "./Components/main";

interface LanguageContextInterface {

  language: string;
  changeLanguage?: () => void;
}
export const LanguageContext = createContext<LanguageContextInterface>({
  language: Language.RU,
});

interface ThemeContextInterface {
  theme?: string;
  changeTheme?: () => void;
}
export enum Theme {
  White = "WhiteTheme",
  Black = "BlackTheme",
}

export const ThemeContext = createContext<ThemeContextInterface>({});

function App() {
  const [language, setLanguage] = useState<string>(Language.RU);
  const [theme, setTheme] = useState<string>(Theme.Black);

  const changeLanguage = () => {
    language === Language.RU
      ? setLanguage(Language.ENG)
      : setLanguage(Language.RU);
  };

  const changeTheme = () => {
    theme === Theme.Black ? setTheme(Theme.White) : setTheme(Theme.Black);
  };

  //  const { theme, setTheme } = useTheme()

  //  const handleLightThemeClick = () => {
  //    setTheme('light')
  //  }
  //  const handleDarkThemeClick = () => {
  //    setTheme('dark')
  //  }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <GlobalStyles theme={theme} />
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          <Header />
          <Main />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
