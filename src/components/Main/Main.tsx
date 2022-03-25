import { FC } from "react";
import { MainStyle } from "./MainStyle";

const Main: FC = ({ children }) => {
  return <MainStyle>{children}</MainStyle>;
};
export default Main;
