import Button from "../Button/Button";
import Text from "../Text/Text";
import { BannerStyle } from "./BannerStyle";

const Banner = () => {
  return (
    <BannerStyle>
      <div>
        <div>
          <Text>
            VELODICADE <p>PARA NAVEGAR NOS</p> MELHORES APPS <p>do mercado</p>
          </Text>
          <div>
            <Button styleType="banner" title="QUERO SER INTNET" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={require("../../assets/image/image01.png")}
          alt="imageBanner"
        />
      </div>
    </BannerStyle>
  );
};
export default Banner;
