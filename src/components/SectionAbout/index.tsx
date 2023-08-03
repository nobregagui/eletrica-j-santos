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
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

interface IPropsAbout {
  title: string;
  urlBall: string;
  urlImageBackground: string;
  urlImgStore: string;
  iconAbout: string;
  textAbout: string;
  textButton: string;
}

export default function SectionAbout() {
  const [data, setData] = useState<IPropsAbout>({
    title: "",
    iconAbout: "",
    textAbout: "",
    textButton: "",
    urlBall: "",
    urlImageBackground: "",
    urlImgStore: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/about")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <ContainerTitle>
            <Title>{data.title.toUpperCase()}</Title>
            <ImageBall src={data.urlBall} />
          </ContainerTitle>
          <ContainerInfos>
            <ContainerImages>
              <ImageBackground src={data.urlImageBackground} />
              <ImageStore src={data.urlImgStore} />
              <ImageIcon src={data.iconAbout} />
            </ContainerImages>
            <ContainerText>
              <Description>{data.textAbout}</Description>
              <ButtonComponent text={data.textButton} typeButton="ternary" />
            </ContainerText>
          </ContainerInfos>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}
