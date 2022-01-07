    import React from 'react'
    import styled from 'styled-components' ; 
    import HomeProducts from '../Components/HomeProducts'
    import Nav from '../Components/Nav';
    import Anouncement from '../Components/Anouncement';
    import Newsletter from '../Components/Newsletter';
    import Footer from '../Components/Footer';

    const Container = styled.div` 
    display:flex; 
    flex-direction:column; 
    width: 100vw;
    justify-content: center;align-items:center;`
    function ProductList() {
        return (
            <Container>
                {/* <Nav />
            <Anouncement /> */}
            <HomeProducts />
            {/* <Newsletter /> */}
            {/* <Footer /> */}
            </Container>
        )
    }
    
    export default ProductList
    