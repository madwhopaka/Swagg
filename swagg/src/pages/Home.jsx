import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Anouncement from "../Components/Anouncement";
import Categories from "../Components/Categories";
import DealofDay from "../Components/DealofDay";
import HomeProducts from "../Components/HomeProducts";
import Nav from "../Components/Nav";
import SliderPage from "../Components/SliderPage";
import Newsletter from "../Components/Newsletter";
import bslider from "../images/bslider.png";
import mobslider from '../images/final-band-mobile.png' ; 
import adidas from "../images/adidas.jpg";
import Footer from "../Components/Footer";

const Image = styled.img`
  width: 100%;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

const Container = styled.div `
display:"flex" ; 
flex-direction:column; 
justify-content:"center"; 
align-items:"center";` ;

const Curve = styled.div`
  --divider-height: 4rem;
  position: relative;
  top: calc(var(--divider-height) / 2 * -1);
  height: var(--divider-height);
  width: 100%;
  /* alternatively, could get rid of the rect, and move the svg container further down */
  float: left;
  z-index: 1;
`;

function Home() {
  const width  = window.innerWidth ;
    const height = window.innerHeight;
    const [screenHeight, setHeight] = useState(height) ; 
    const [screenWidth, setWidth] = useState(width) ;   

    useEffect(() => {
        setWidth(window.innerWidth) ; 
        setHeight(window.innerHeight) ; 
    }, [window.innerHeight, window.innerWidth]);
  return (
    <Container>
      <Anouncement />
      <Nav />
      <SliderPage />
      {screenHeight>screenWidth?<img  src = {mobslider} width = "100%"/>:<img src={bslider} alt="annc" width="100%" />}
      
      <DealofDay />
          <Categories />
          <HomeProducts />
      <Newsletter />
      {/* <Footer /> */}
    </Container>
  );
}

export default Home;
