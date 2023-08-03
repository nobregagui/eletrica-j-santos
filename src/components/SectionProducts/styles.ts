import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  gap: 30px;
  justify-content: center;
  position: absolute;
  top: 65%;
  left: 23%;

  @media (max-width: 1525px) {
    left: 12%;
  }

  @media (max-width: 1325px) {
    left: 5%;
  }

  @media (max-width: 1256px) {
    left: 5%;
  }

  @media (max-width: 1256px) {
    grid-template-columns: repeat(3, 0fr);

  }
`;

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  color: ${(props) => props.theme.colors.white};
  font-family: "Gotham";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.05px;
`;

export const BackgroundImage = styled.img`
  @media (max-width: 1256px) {
    width: 100%;
  }
`;

export const WrapperBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
