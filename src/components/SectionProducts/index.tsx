import CardProducs from "../CardComponent";
import {
  Container,
  ContainerProducts,
  BackgroundImage,
  Title,
  WrapperBackgroundImage,
} from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

interface IPropsProducts {
  imgBackground: string;
  title: string;
  products: [
    {
      urlImgProducts: string;
      category: string;
      titleProduct: string;
      valueDesc: number;
      valueInt: number;
      timesInstallments?: number;
    }
  ];
}

export default function SectionProducts() {
  const [data, setData] = useState<IPropsProducts>({
    imgBackground: "",
    title: "",
    products: [
      {
        urlImgProducts: "",
        category: "",
        titleProduct: "",
        valueDesc: 0,
        valueInt: 0,
        timesInstallments: 0,
      },
    ],
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/sectionProducts")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container id="section-products">
        <WrapperBackgroundImage>
          <BackgroundImage src={data.imgBackground} />
          <Title>{data.title}</Title>
        </WrapperBackgroundImage>
        <ContainerProducts>
          {data &&
            data.products.map((item, id) => (
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
