import {
  Container,
  ImageBallsHeader,
  ImageLogo,
  Menu,
  ContainerMenu,
  MenuItem,
  SubMenu,
  SubMenuItem,
  WrapperHeader,
  ContainerSubitem,
  ImageCategory,
  ContainerImageCategory,
  WrapperMenu,
  ArrowCategory,
} from "./styles";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import axios from "axios";

interface IPropsMenu {
  id: number;
  name: string;
  category?:
    | {
        name: string;
        image: string;
      }[]
    | undefined;
}

export default function Header() {
  const [activeMenu, setMenuActive] = useState<number>(0);
  const [viewSubMenu, setViewSubMenu] = useState<boolean>(false);
  const [data, setData] = useState<IPropsMenu[]>([
    {
      id: 0,
      name: "",
      category: [
        {
          image: "",
          name: "",
        },
      ],
    },
  ]);

  const handleItemClick = (index: number) => {
    setMenuActive(index);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ImageBallsHeader src="../../../img/Group 13.png" alt="" />
        <WrapperHeader>
          <ImageLogo src="../../../img/logo.svg" alt="" />
          <ContainerMenu>
            <Menu>
              {data &&
                data.map((item, id) => (
                  <WrapperMenu key={id}>
                    <MenuItem
                      onClick={() => {
                        handleItemClick(id);
                      }}
                      onMouseEnter={() => {
                        item.category
                          ? setViewSubMenu(true)
                          : setViewSubMenu(false);
                      }}
                      style={
                        item.name === "Contato"
                          ? {
                              background: "#202332",
                              color: "#fff",
                              padding: "12px 30px",
                              borderRadius: "10px",
                              fontWeight: "bold",
                              border: "none",
                            }
                          : undefined
                      }
                      href="#"
                      activeMenu={id !== 1 && id !== 4 && activeMenu === id}
                    >
                      {item.name}
                      {item.category && (
                        <ArrowCategory
                          src="../../../img/setaCategoria.png"
                          alt=""
                        />
                      )}

                      {item.category && (
                        <ContainerSubitem
                          viewSubMenu={viewSubMenu}
                          onMouseLeave={() => {
                            setViewSubMenu(false);
                          }}
                        >
                          {item.category.map((subitem, id) => (
                            <SubMenu className="submenu" key={id}>
                              <ContainerImageCategory>
                                <ImageCategory src={subitem.image} alt="" />
                              </ContainerImageCategory>
                              <SubMenuItem>{subitem.name}</SubMenuItem>
                            </SubMenu>
                          ))}
                        </ContainerSubitem>
                      )}
                    </MenuItem>
                  </WrapperMenu>
                ))}
            </Menu>
          </ContainerMenu>
        </WrapperHeader>
      </Container>
    </ThemeProvider>
  );
}
