import {
  Container,
  ContainerButton,
  ContainerButtonScroll,
  ContainerImage,
  ContainerImageLuminary,
  ContainerText,
  ImageBalls,
  ImageBallsSecondary,
  ImageScroll,
  ImageStars,
  ImageTicket,
  ImageWoman,
  SubTitle,
  TextScroll,
  Title,
} from "./styles";
import dataHome from "../../data/dataHome.json";
import ButtonComponent from "../Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerText>
          {dataHome.pessoas && (
            <>
              <Title>{dataHome.pessoas.title}</Title>
              <SubTitle>{dataHome.pessoas.paragraph}</SubTitle>
              <ContainerButton>
                {dataHome.pessoas.button.map((item, id) => (
                  <ButtonComponent
                    typeButton={
                      item.typeButton === "primary" ? "primary" : "secondary"
                    }
                    key={id}
                    text={item.title}
                  />
                ))}
              </ContainerButton>
              <ContainerButtonScroll>
                <ImageScroll src={dataHome.pessoas.buttonScroll.src} alt="" />
                <TextScroll href="#section-products">
                  {dataHome.pessoas.buttonScroll.text}
                </TextScroll>
              </ContainerButtonScroll>
            </>
          )}
        </ContainerText>
        <ContainerImage>
          <ImageWoman
            width={"467px"}
            src={dataHome.pessoas.imagesHome.woman}
            alt=""
          />
          <ContainerImageLuminary>
            <ImageTicket src={dataHome.pessoas.imagesHome.ticket} alt="" />
            <img src={dataHome.pessoas.imagesHome.luminy} alt="" />
          </ContainerImageLuminary>
          <ImageStars src={dataHome.pessoas.imagesHome.starts} alt="" />
          <ImageBalls src={dataHome.pessoas.imagesHome.balls} alt="" />
          <ImageBallsSecondary src={dataHome.pessoas.imagesHome.balls} alt="" />
        </ContainerImage>
      </Container>
    </ThemeProvider>
  );
}
