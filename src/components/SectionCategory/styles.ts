import styled from "styled-components";

export const Container = styled.div`
  margin-top: 800px;
  width: 100%;
`;

export const BackGroundCategory = styled.div`
  border-radius: 0px 15px 0px 0px;
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 456px;
  position: relative;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Gotham;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.05px;
  position: absolute;
  top: 75px;
  left: 50px;
`;

export const ContainerTitle = styled.div`
  position: relative;
`;

export const ImageTitle = styled.img`
  position: absolute;
`;

export const ContainerCardsCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  gap: 30px;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 260px;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 0fr);
  }
`;
