import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Inter', sans-serif;
  
${(themeProps) => {
  switch (themeProps.theme) {
    case "WhiteTheme":
      return "background-color: white";
    default:
      return "background-color: black";
  }
}}}

#root {
  height: 100%;
  width: 100%;
}`;
