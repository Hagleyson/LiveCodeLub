import { ButtonStyle } from "./ButtonStyle";

type propsType = {
  styleType: string;
  title: string;
};

const Button = (props: propsType) => {
  return (
    <ButtonStyle type="button" styleType={props.styleType}>
      {props.title}
    </ButtonStyle>
  );
};
export default Button;
