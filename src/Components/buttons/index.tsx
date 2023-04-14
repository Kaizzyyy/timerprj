import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: red;
  border: 2 black;
  font-family: inherit;
`;

interface ButtonInterface {
  text: string;
  onClick?: () => void;
}
export const Button: FC<ButtonInterface> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
