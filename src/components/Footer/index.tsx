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
import data from "../../data/dataFooter.json";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerInfosAndCopy>
          <ContainerInfos>
            <ContainerText>
              <LogoFooter src={data.dataFooter.logoFooter} />
              <TextFooter>{data.dataFooter.textFooter}</TextFooter>
            </ContainerText>
            <ContainerSocialMidia>
              <TextSocialMidia>
                {data.dataFooter.textSocialMidia}
              </TextSocialMidia>
              <ContainerIcons>
                {data.dataFooter.socialIcons &&
                  data.dataFooter.socialIcons.map((item, id) => (
                    <IconSocialMidia key={id} src={item.urlImage} />
                  ))}
              </ContainerIcons>
            </ContainerSocialMidia>
          </ContainerInfos>
          <BorderFooter />
          <ContainerCopy>
            <TextCopy>{data.dataFooter.copyrigth}</TextCopy>
            <ContainerAuthor>
              <Author>{data.dataFooter.credits.author}</Author>
              <ImageAuthor src={data.dataFooter.credits.urlImage} />
            </ContainerAuthor>
          </ContainerCopy>
        </ContainerInfosAndCopy>
        <ImageBackground src={data.dataFooter.backGroundImage} />
      </Container>
    </ThemeProvider>
  );
}
