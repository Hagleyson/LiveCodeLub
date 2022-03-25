import { LinkStyle } from "./LinkStyle";

type propsType = {
  url: string;
  title: string;
};

const Link = (props: propsType) => {
  return <LinkStyle href={props.url}>{props.title}</LinkStyle>;
};
export default Link;
