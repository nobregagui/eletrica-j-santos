import { ThemeProvider } from "styled-components";
import { Container, Title, ContainerImage, ImageCategory } from "./styles";
import theme from "../../theme";

interface IPropsCardCategory {
  title: string;
  srcImage: string;
}

export default function CardCategory({ title, srcImage }: IPropsCardCategory) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>{title.toUpperCase()}</Title>
        <ContainerImage>
          <ImageCategory src={srcImage} />
        </ContainerImage>
      </Container>
    </ThemeProvider>
  );
}
