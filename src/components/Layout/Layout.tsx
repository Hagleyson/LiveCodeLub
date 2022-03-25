import { FC } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { LayoutStyle } from "./LayoutStyle";
const Layout: FC = ({ children }) => {
  return (
    <LayoutStyle>
      <Header />
      <Main>{children}</Main>
    </LayoutStyle>
  );
};
export default Layout;
