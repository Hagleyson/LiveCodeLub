import Link from "../Link/Link";
import { HeaderStyle } from "./HeaderStyle";
import Button from "../Button/Button";
const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={require("../../assets/image/logo.png")} alt="logo" />
      </div>
      <div>
        <Link url="#" title="Sobre nós" />
        <Link url="#" title="Para você" />
        <Link url="#" title="Para empresa" />
        <Link url="#" title="Planos" />
        <Link url="#" title="Blog" />
        <Link url="#" title="Contato" />
        <Link url="#" title="Carreira" />
      </div>
      <div>
        <Button title="2 Via do boleto" styleType="primary" />
        <Button title="Entrar" styleType="secondary" />
      </div>
    </HeaderStyle>
  );
};
export default Header;
