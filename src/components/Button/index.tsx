import { Button } from "./styles";

interface IPropsButton {
  typeButton: "primary" | "secondary" | "ternary";
  text: string;
}

export default function ButtonComponent({ typeButton, text }: IPropsButton) {
  return <Button typeButton={typeButton}>{text.toUpperCase()}</Button>;
}
