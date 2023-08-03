import CardProducs from "../CardComponent";
import {
  Container,
  ContainerProducts,
  BackgroundImage,
  Title,
  WrapperBackgroundImage,
} from "./styles";
import dataProducts from "../../data/dataProducts.json";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

export default function SectionProducts() {
  return (
    <ThemeProvider theme={theme}>
      <Container id="section-products">
        <WrapperBackgroundImage>
          <BackgroundImage src={dataProducts.sectionProducts.imgBackground} />
          <Title>{dataProducts.sectionProducts.title}</Title>
        </WrapperBackgroundImage>
        <ContainerProducts>
          {dataProducts &&
            dataProducts.sectionProducts.products.map((item, id) => (
              <CardProducs
                key={id}
                srcImgCard={item.urlImgProducts}
                category={item.category}
                titleCard={item.titleProduct}
                priceDiscount={item.valueDesc}
                price={item.valueInt}
                timesInstallments={item.timesInstallments}
              />
            ))}
        </ContainerProducts>
      </Container>
    </ThemeProvider>
  );
}
