import styled from "styled-components";

interface IPropsButton {
  typeButton: "primary" | "secondary" | "ternary";
}

export const Button = styled.a<IPropsButton>`
  text-decoration: none;
  padding: 15px;
  width: 360px;
  border-radius: 15px;
  border: ${(props) =>
    (props.typeButton === "primary" && "none") ||
    (props.typeButton === "secondary" && "1px solid #fff") ||
    (props.typeButton === "ternary" && "none")};
  color: ${(props) =>
    (props.typeButton === "primary" && "#202332") ||
    (props.typeButton === "secondary" && "#fff") ||
    (props.typeButton === "ternary" && "#fff")};
  background-color: ${(props) =>
    (props.typeButton === "primary" && "#FBAF17") ||
    (props.typeButton === "secondary" && "transparent") ||
    (props.typeButton === "ternary" && "#202332")};
  text-align: center;
  font-family: "Gotham";
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 38px; /* 211.111% */
  letter-spacing: -0.54px;
  cursor: pointer;
`;
