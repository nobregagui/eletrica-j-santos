import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 273px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ImageBackground = styled.img`
  position: absolute;
  right: 0;
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerInfosAndCopy = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 1545px) {
    width: auto;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoFooter = styled.img`
  place-self: start;
`;

export const TextFooter = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: Gotham;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 237.5% */
  letter-spacing: -0.8px;
  max-width: 360px;
`;

export const ContainerSocialMidia = styled.div``;

export const TextSocialMidia = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: right;
  font-family: Gotham;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 237.5% */
  letter-spacing: -0.8px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 26px;
  justify-content: center;
`;

export const IconSocialMidia = styled.img``;

export const BorderFooter = styled.div`
  height: 1px;
  background: ${(props) => props.theme.colors.primary};
  margin: 25px 0px;
  width: 100%;
`;

export const ContainerCopy = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TextCopy = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: Gotham;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px; /* 300% */
  letter-spacing: -0.3px;
`;

export const ContainerAuthor = styled.div`
  display: flex;
  gap: 5px;
`;

export const Author = styled.p`
  align-self: center;
  color: ${(props) => props.theme.colors.white};
  text-align: right;
  font-family: Gotham;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const ImageAuthor = styled.img`
  align-self: center;
`;
