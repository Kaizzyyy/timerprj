import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
/* #root {
  height: 100%;
  width: 100%;
} */

/* html[data-theme='dark'] {
  --button-text-color: #ffffff;
  --button-background-color: #4e005c;
  --button-border-color: #ba8fc2;

  --input-text-color: #ffffff;
  --input-placeholder-text-color: #dddddd;
  --input-background-color: #7c7c7c;
  --input-border-color: #ba8fc2;

  --background-color: #292929;
  --icon-color: #ba8fc2;
}

html[data-theme='light'] {
  --button-text-color: #252525;
  --button-background-color: #f9d4ff;
  --button-border-color: #4e005c;

  --input-text-color: #252525;
  --input-placeholder-text-color: #a7a7a7;
  --input-background-color: #ffffff;
  --input-border-color: #4e005c;

  --background-color: #dfdfdf;
  --icon-color: #4e005c;
} */

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
