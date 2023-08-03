import styled from "styled-components";

interface IPropsMenuActive {
  activeMenu: boolean;
}

interface IPropsSubMenu {
  viewSubMenu: boolean;
}

export const Container = styled.div`
  height: 80px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  height: 100%;
`;

export const ImageBallsHeader = styled.img`
  position: absolute;
  left: 0px;
`;

export const ImageLogo = styled.img`
  align-self: center;
  margin-left: 240px;
  margin-right: 260px;
  @media (max-width: 1255px) {
    margin-right: 170px;
  }
  @media (max-width: 1170px) {
    margin-right: 120px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 150px 0px 0px 150px;
  width: 100%;
  gap: 30px;
  align-self: center;
  height: 100%;
  max-width: 1120px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  align-self: center;
  display: flex;
  gap: 30px;
  padding-left: 158px;
`;

export const MenuItem = styled.a<IPropsMenuActive>`
  font-family: "Gotham", sans-serif;
  font-size: 18px;
  font-style: normal;
  display: flex;
  font-weight: ${(props) => (props.activeMenu ? "bold" : 400)};
  border-bottom: ${(props) =>
    props.activeMenu ? "4px solid #fff" : "4px solid transparent"};
  line-height: normal;
  letter-spacing: -0.54px;
  text-decoration: none;
  position: relative;
  color: #202332;
`;

export const ContainerSubitem = styled.div<IPropsSubMenu>`
  transition: 0.9s;
  right: -115px;
  position: absolute;
  display: ${(props) => (props.viewSubMenu ? "flex" : "none")};
  flex-direction: column;
  min-width: 275px;
  gap: 20px;
  align-items: center;
  padding: 30px;
  top: 70px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: rgb(000, 000, 000) 0px 20px 30px -10px;
  z-index: 3;
  ::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    width: 0px;
    height: 0px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff;
    transform: translate(-50%, -50%);
  }
`;

export const SubMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const ContainerImageCategory = styled.div`
  border-radius: 15px;
  background-color: ${props => props.theme.colors.primary};
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
`;

export const ImageCategory = styled.img`
  align-self: center;
`;

export const ArrowCategory = styled.img`
  align-self: center;
`;

export const SubMenuItem = styled.a`
  color: #202332;
  font-family: Gotham;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.54px;
`;

export const ImageBackGroundSubMenu = styled.img``;

export const ContainerImageBackGround = styled.div`
  position: absolute;
`;
