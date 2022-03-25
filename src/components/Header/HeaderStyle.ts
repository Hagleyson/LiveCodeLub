import { theme } from "./../../globalstyle/theme";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${theme.headerColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > div {
    display: flex;
  }
  > div:first-child {
    width: 100px;
    > img {
      width: 100%;
    }
  }
  > div:nth-child(2) {
    width: 60%;
    justify-content: flex-end;
  }
  > div:last-child {
    width: 20%;
    justify-content: space-evenly;
  }
`;
