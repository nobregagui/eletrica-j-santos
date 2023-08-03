import CardCategory from "../CardCategory";
import {
  Container,
  BackGroundCategory,
  ContainerCardsCategory,
  Title,
  ContainerTitle,
  ImageTitle,
} from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

interface IPropsCategory {
  imgBackground: string;
  title: string;
  products: [
    {
      titleProduct: string;
      urlImgProducts: string;
    }
  ];
}

export default function SectionCategory() {
  const [data, setData] = useState<IPropsCategory>({
    imgBackground: "",
    title: "",
    products: [
      {
        titleProduct: "",
        urlImgProducts: "",
      },
    ],
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/sectionCategory")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BackGroundCategory>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ContainerTitle>
              <ImageTitle src={data.imgBackground} />
              <Title>{data.title}</Title>
            </ContainerTitle>
          </div>
          <ContainerCardsCategory>
            {data.products &&
              data.products.map((item, id) => (
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
