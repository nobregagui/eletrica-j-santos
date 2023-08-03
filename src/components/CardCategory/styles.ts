import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 263px;
  height: 303px;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-family: Gotham;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.66px;
`;
export const ContainerImage = styled.div`
  width: 100%;
  height: 258px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #fbaf17 0%, #fba017 100%);
`;

export const ImageCategory = styled.img`
  align-self: center;
`;
