import React from "react";

import { Container, ContainerFooter } from "./styles";
import Header from "./components/Header";
import Home from "./components/SectionHome";
import SectionCategory from "./components/SectionCategory";
import Footer from "./components/Footer";
import SectionSales from "./components/SectionSales";
import SectionAbout from "./components/SectionAbout";
import SectionProducts from "./components/SectionProducts";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <SectionProducts />
      <SectionCategory />
      <SectionAbout />
      <ContainerFooter>
        <SectionSales />
        <Footer />
      </ContainerFooter>
    </Container>
  );
}

export default App;
