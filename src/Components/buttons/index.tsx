import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 12px 24px;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

`;

interface ButtonInterface {
  text: string;
  onClick?: () => void;
}
export const Button: FC<ButtonInterface> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
