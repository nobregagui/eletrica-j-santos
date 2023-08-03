import { ThemeProvider } from "styled-components";
import {
  Container,
  ContainerImage,
  ImageCard,
  Title,
  ContainerPrice,
  PriceDiscount,
  Price,
  Category,
  ContainerInstallments,
  Installments,
  BorderBottom,
  WrapperPrice,
} from "./styles";
import theme from "../../theme";

interface IPropsCard {
  srcImgCard: string;
  category: string;
  titleCard: string;
  priceDiscount: number;
  price: number;
  timesInstallments?: number;
}

export default function CardProducs({
  category,
  price,
  priceDiscount,
  srcImgCard,
  titleCard,
  timesInstallments,
}: IPropsCard) {
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerImage>
          <Category>{category}</Category>
          <ImageCard src={srcImgCard} />
          <BorderBottom />
        </ContainerImage>
        <Title>{titleCard}</Title>
        <ContainerPrice>
          <PriceDiscount>{formatedPrice.format(priceDiscount)}</PriceDiscount>
          <WrapperPrice>
            <Price>{formatedPrice.format(price)}</Price>
          </WrapperPrice>
        </ContainerPrice>
        {timesInstallments && (
          <ContainerInstallments>
            <Installments>
              ou em {timesInstallments}x de{" "}
              {formatedPrice.format(price / timesInstallments)}
            </Installments>
          </ContainerInstallments>
        )}
      </Container>
    </ThemeProvider>
  );
}
