import { createContext, useState } from "react";

import { Header } from "./components/header";
import { Main } from "./components/main";

import { Language } from "./translation/translation";
import { GlobalStyles } from "./styles/GlobalStyles";

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

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <GlobalStyles theme={theme} />
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <Header />
        <Main />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
