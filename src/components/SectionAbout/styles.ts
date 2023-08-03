import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundGrayWeak};
  margin-top: 500px;
  margin-bottom: 106px;
  @media (max-width: 1150px) {
    margin-top: 900px;
  }
`;

export const ContainerImages = styled.div`
  height: 329px;
  width: 945px;
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
`;

export const ContainerInfos = styled.div`
  display: flex;
  gap: 23px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 215px;
`;

export const ImageStore = styled.img`
  position: absolute;
  right: 0;
  bottom: -20%;
`;

export const ImageBackground = styled.img`
  position: absolute;
  right: 12%;
  bottom: -26%;
`;

export const ImageIcon = styled.img`
  position: absolute;
  right: 47%;
  bottom: -35%;
`;

export const ImageBall = styled.img`
  position: absolute;
  left: 39%;
  top: 43%;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 105px;

  position: relative;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  padding-top: 98px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-family: Gotham;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.05px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 555px;
  color: ${(props) => props.theme.colors.text};
  font-family: Gotham;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 211.111% */
  letter-spacing: -0.54px;
`;
