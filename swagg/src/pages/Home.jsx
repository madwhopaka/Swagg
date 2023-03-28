import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Anouncement from "../Components/Anouncement";
import Categories from "../Components/Categories";
import DealofDay from "../Components/DealofDay";
import HomeProducts from "../Components/HomeProducts";
import Nav from "../Components/Nav";
import SliderPage from "../Components/SliderPage";
import Newsletter from "../Components/Newsletter";
import bslider from "../images/bslider.png";
import mobslider from '../images/final-band-mobile.png';
import adidas from "../images/adidas.jpg";
import { mobile } from "../responsive";
import Footer from "../Components/Footer";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from 'react-redux';




const Image = styled.img`
  width: 100%;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

const Container = styled.div`
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

const Banner = styled.div`
  ${mobile({ padding: "10px 0px" })}
`
function Home() {
  const width = window.innerWidth;
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })


  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user == null) {
      const script = document.createElement('script');
      script.src = 'https://otpless.com/auth.js';
      script.id = 'otpless';
      console.log(script.src);
      document.body.appendChild(script);
      console.log(document.body);
    }
  }, []);


  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;
      // Handle the signup/signin process
      dispatch(loginSuccess({ fullName: waName, password: waNumber }));
      window.location.href = '/';
    }

  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
  });
  return (
    <Container>
      <Anouncement />
      <Nav />
      <SliderPage />
      <Banner>
        {dimensions.height > dimensions.width ? <img src={mobslider} width="100%" /> : <img src={bslider} alt="annc" width="100%" />}
      </Banner>
      <DealofDay />
      <Categories />
      <HomeProducts />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Home;
