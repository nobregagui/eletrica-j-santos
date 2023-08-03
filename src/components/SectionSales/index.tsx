import ButtonComponent from "../Button";
import {
  Container,
  ContainerButton,
  ImageWoman,
  ImageBalls,
  ContainerImages,
} from "./styles";

export default function SectionSales() {
  return (
    <Container>
      <ContainerImages>
        <ImageWoman src="../../../img/mulherVendas.png" alt="" />
        <ImageBalls src="../../../img/bolinhas.png" alt="" />
      </ContainerImages>
      <ContainerButton>
        <ButtonComponent
          typeButton={"primary"}
          text={"ACIONE NOSSO TELEVENDAS"}
        />
      </ContainerButton>
    </Container>
  );
}
