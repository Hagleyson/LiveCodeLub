import { theme } from "./../../globalstyle/theme";
import styled from "styled-components";

type buttonType = {
  styleType: string;
};
export const ButtonStyle = styled.button`
  border-radius: 25px;
  border: 3px solid;
  color: ${theme.white};
  padding: 10px 25px;
  font-size: 13px;
  cursor: pointer;
  ${(props: buttonType) =>
    props.styleType === "primary" &&
    `
    border-color:${theme.blue};
    background-color: ${theme.blue};  
    &:hover {
        background-color: ${theme.blueDark};
        border-color:${theme.blueDark};
      }
  `}
  ${(props: buttonType) =>
    props.styleType === "secondary" &&
    `
    border-color:${theme.orage};
    background-color: transparent;
    &:hover {
        background-color: ${theme.orage};
      }
  `}
  ${(props: buttonType) =>
    props.styleType === "banner" &&
    `
    border-radius:10px;
    border-color:${theme.orage};
    background-color: ${theme.orage};
    &:hover {
        background-color: ${theme.orage};
      }
  `}
`;
