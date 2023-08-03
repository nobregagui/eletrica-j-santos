import CardCategory from "../CardCategory";
import {
  Container,
  BackGroundCategory,
  ContainerCardsCategory,
  Title,
  ContainerTitle,
  ImageTitle,
} from "./styles";
import dataCategory from "../../data/dataCategory.json";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function SectionCategory() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BackGroundCategory>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ContainerTitle>
              <ImageTitle src={dataCategory.sectionCategory.imgBackground} />
              <Title>{dataCategory.sectionCategory.title}</Title>
            </ContainerTitle>
          </div>
          <ContainerCardsCategory>
            {dataCategory.sectionCategory.products &&
              dataCategory.sectionCategory.products.map((item, id) => (
                <CardCategory
                  title={item.titleProduct}
                  srcImage={item.urlImgProducts}
                  key={id}
                />
              ))}
          </ContainerCardsCategory>
        </BackGroundCategory>
      </Container>
    </ThemeProvider>
  );
}
