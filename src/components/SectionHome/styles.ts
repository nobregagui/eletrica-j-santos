import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  background-image: url("../../../img/backGroundHome.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  gap: 145px;
`;

export const ContainerText = styled.div``;

export const ContainerImage = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Gotham";
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -7px;
  color: ${(props) => props.theme.colors.white};
  max-width: 555px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: "Gotham";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 211.111% */
  letter-spacing: -0.54px;
  max-width: 555px;
  margin-top: 30px;
  margin-bottom: 22px;
`;

export const ContainerButtonScroll = styled.div`
  display: flex;
  gap: 15px;
`;

export const ImageScroll = styled.img``;

export const TextScroll = styled.a`
  text-decoration: none;
  cursor: pointer;
  align-self: center;
  font-family: "Gotham";
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 211.111% */
  letter-spacing: -0.54px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-bottom: 40px;
`;

export const ImageTicket = styled.img`
  position: absolute;
  right: 41%;
`;

export const ImageStars = styled.img`
  position: absolute;
  right: 0%;
  top: 80%;
  z-index: 2;
`;

export const ImageBalls = styled.img`
  position: absolute;
  top: 27%;
  left: 62%;
  z-index: 1;
  @media (max-width: 1325px) {
    left: 50%;
  }

   @media (max-width: 1210px) {
    left: 45%;
  }
`;

export const ImageBallsSecondary = styled.img`
  position: absolute;
  top: 65%;
  left: 0%;
  z-index: 1;
`;

export const ImageWoman = styled.img`
  position: relative;
  z-index: 2;
`;

export const ContainerImageLuminary = styled.div`
  position: absolute;
  top: 45%;
  right: 67%;
  z-index: 2;
`;
