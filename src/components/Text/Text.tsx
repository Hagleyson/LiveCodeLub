import { FC } from "react";
import { TextStyle } from "./TextStyle";

const Text: FC = ({ children }) => {
  return <TextStyle>{children}</TextStyle>;
};
export default Text;
