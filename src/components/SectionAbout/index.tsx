import ButtonComponent from "../Button";
import {
  Container,
  ContainerText,
  Description,
  Title,
  Wrapper,
  ImageStore,
  ContainerImages,
  ContainerInfos,
  ImageBackground,
  ImageIcon,
  ContainerTitle,
  ImageBall,
} from "./styles";
import data from "../../data/dataAbout.json";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function SectionAbout() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <ContainerTitle>
            <Title>{data.about.title.toUpperCase()}</Title>
            <ImageBall src={data.about.urlBall} />
          </ContainerTitle>
          <ContainerInfos>
            <ContainerImages>
              <ImageBackground src={data.about.urlImageBackground} />
              <ImageStore src={data.about.urlImgStore} />
              <ImageIcon src={data.about.iconAbout} />
            </ContainerImages>
            <ContainerText>
              <Description>{data.about.textAbout}</Description>
              <ButtonComponent
                text={data.about.textButton}
                typeButton="ternary"
              />
            </ContainerText>
          </ContainerInfos>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}
