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
import ButtonComponent from "../Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import axios from "axios";
import { useEffect, useState } from "react";

interface IPropsDataHome {
  title: string;
  paragraph: string;
  button: [
    {
      typeButton: string;
      title: string;
    }
  ];
  buttonScroll: {
    src: string;
    text: string;
  };
  imagesHome: {
    woman: string;
    ticket: string;
    luminy: string;
    starts: string;
    balls: string;
  };
}

export default function Home() {
  const [data, setData] = useState<IPropsDataHome>({
    title: "",
    paragraph: "",
    button: [
      {
        typeButton: "",
        title: "",
      },
    ],
    buttonScroll: {
      src: "",
      text: "",
    },
    imagesHome: {
      woman: "",
      ticket: "",
      luminy: "",
      starts: "",
      balls: "",
    },
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/pessoas")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerText>
          {data && (
            <>
              <Title>{data?.title}</Title>
              <SubTitle>{data.paragraph}</SubTitle>
              <ContainerButton>
                {data.button.map((item, id) => (
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
                <ImageScroll src={data.buttonScroll.src} alt="" />
                <TextScroll href="#section-products">
                  {data.buttonScroll.text}
                </TextScroll>
              </ContainerButtonScroll>
            </>
          )}
        </ContainerText>
        <ContainerImage>
          <ImageWoman width={"467px"} src={data.imagesHome.woman} alt="" />
          <ContainerImageLuminary>
            <ImageTicket src={data.imagesHome.ticket} alt="" />
            <img src={data.imagesHome.luminy} alt="" />
          </ContainerImageLuminary>
          <ImageStars src={data.imagesHome.starts} alt="" />
          <ImageBalls src={data.imagesHome.balls} alt="" />
          <ImageBallsSecondary src={data.imagesHome.balls} alt="" />
        </ContainerImage>
      </Container>
    </ThemeProvider>
  );
}
