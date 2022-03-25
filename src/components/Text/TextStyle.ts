import styled from "styled-components";
import { theme } from "../../globalstyle/theme";
export const TextStyle = styled.h1`
  font-size: 50px;
  color: white;
  margin-bottom: 0px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${theme.white};
  color: transparent;
  > p {
    font-size: 33px;
    color: ${theme.white};
    margin: 5px 0;
    -webkit-text-stroke-width: 0px;
  }
`;
