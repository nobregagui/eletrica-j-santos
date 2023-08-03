import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 263px;
  height: 450px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const ContainerImage = styled.div`
  position: relative;
`;

export const Category = styled.p`
  /* text-align: center; */
  position: absolute;
  top: 15px;
  border-radius: 0px 62px 62px 0px;
  background: ${(props) => props.theme.colors.backgroundGrayStrong};
  padding: 8px 15px;
  color: ${(props) => props.theme.colors.text};
  font-family: "Gotham";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 130.769% */
  letter-spacing: -0.39px;
`;

export const BorderBottom = styled.div`
  height: 19px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 217px;
  position: absolute;
  bottom: -6px;
  left: 23px;
`;

export const ImageCard = styled.img`
  /* text-align: center; */
`;

export const Title = styled.h1`
  margin-top: 28px;
  padding: 0px 26px 20px 26px;
  width: 211px;
  height: 54px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: "Gotham";
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 121.739% */
  letter-spacing: -1.15px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const WrapperPrice = styled.div`
  border-radius: 15px 0px 0px 15px;
  width: 144px;
  height: 51px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Price = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-family: "Gotham";
  font-size: 20px;
  font-style: normal;
  padding: 17px 15px;
  font-weight: 400;
  letter-spacing: -0.6px;
`;

export const PriceDiscount = styled.h2`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.secondary};
  align-self: center;
  text-align: center;
  font-family: "Gotham";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 237.5% */
  letter-spacing: -0.48px;
`;

export const ContainerInstallments = styled.div`
  border-radius: 15px 15px 0px 0px;
  background: ${(props) => props.theme.colors.backgroundGrayWeak};
  padding: 15px 17px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 35px;
`;

export const Installments = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: "Gotham";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.48px;
`;
