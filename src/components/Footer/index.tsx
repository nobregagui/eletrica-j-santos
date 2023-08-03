import {
  Container,
  ContainerInfos,
  ContainerText,
  LogoFooter,
  TextFooter,
  ContainerSocialMidia,
  TextSocialMidia,
  IconSocialMidia,
  ContainerIcons,
  BorderFooter,
  ContainerCopy,
  TextCopy,
  ContainerAuthor,
  Author,
  ImageAuthor,
  ContainerInfosAndCopy,
  ImageBackground,
} from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

interface IPropsFooter {
  logoFooter: string;
  textFooter: string;
  textSocialMidia: string;
  socialIcons: [
    {
      urlImage: string;
    }
  ];
  copyrigth: string;
  credits: {
    urlImage: string;
    author: string;
  };
  backGroundImage: string;
}

export default function Footer() {
  const [data, setData] = useState<IPropsFooter>({
    backGroundImage: "",
    copyrigth: "",
    credits: {
      author: "",
      urlImage: "",
    },
    logoFooter: "",
    socialIcons: [
      {
        urlImage: "",
      },
    ],
    textFooter: "",
    textSocialMidia: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/dataFooter")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerInfosAndCopy>
          <ContainerInfos>
            <ContainerText>
              <LogoFooter src={data.logoFooter} />
              <TextFooter>{data.textFooter}</TextFooter>
            </ContainerText>
            <ContainerSocialMidia>
              <TextSocialMidia>{data.textSocialMidia}</TextSocialMidia>
              <ContainerIcons>
                {data.socialIcons &&
                  data.socialIcons.map((item, id) => (
                    <IconSocialMidia key={id} src={item.urlImage} />
                  ))}
              </ContainerIcons>
            </ContainerSocialMidia>
          </ContainerInfos>
          <BorderFooter />
          <ContainerCopy>
            <TextCopy>{data.copyrigth}</TextCopy>
            <ContainerAuthor>
              <Author>{data.credits.author}</Author>
              <ImageAuthor src={data.credits.urlImage} />
            </ContainerAuthor>
          </ContainerCopy>
        </ContainerInfosAndCopy>
        <ImageBackground src={data.backGroundImage} />
      </Container>
    </ThemeProvider>
  );
}
