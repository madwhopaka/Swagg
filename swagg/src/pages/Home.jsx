import React from 'react'
import styled from 'styled-components'  ;
import Anouncement from '../Components/Anouncement'
import Categories from '../Components/Categories'
import DealofDay from '../Components/DealofDay'
import HomeProducts from '../Components/HomeProducts'
import Nav from '../Components/Nav'
import SliderPage from '../Components/SliderPage'
import Newsletter from '../Components/Newsletter';
import bslider from '../images/bslider.png';
import adidas from '../images/adidas.jpg'
import Footer from '../Components/Footer';


const Image =  styled.img`
    width: 100%; 
    transition : .3s ease-in ;

    &:hover {
        transform: scale(1.01);
    }
`
    
    function Home() {
        return (
            <div>
                <Anouncement/>
                <Nav />
                <SliderPage />
                <img src = {bslider} alt = "annc" width ="100%" />
                <DealofDay />
                <Categories />
                <HomeProducts />
                <Newsletter />
                <Footer />  
            </div>
        )
    }
    
    export default Home
    