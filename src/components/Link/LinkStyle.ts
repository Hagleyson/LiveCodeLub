import { theme } from "./../../globalstyle/theme";
import styled from "styled-components";
export const LinkStyle = styled.a`
  font-size: 17px;
  color: ${theme.white};
  margin: 0 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
