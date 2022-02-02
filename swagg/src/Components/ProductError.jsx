import React from 'react';
import styled from 'styled-components' ; 
import emptylist  from '../images/emptylist.png'  ;



const Container = styled.div `
display:flex; 
width: 100%;
text-align: center;
justify-content: center;
flex-direction: column;
align-items:center;
background-color : whitesmoke;
height:60vh ; `

const Img = styled.img`
background-size: cover;
height: 200px;
`

const H3 = styled.h3 `
color:grey;
font-weight: 200 ; 
font-size: 16px ; `
function ProductError() {
  return <Container>
      <Img src= {emptylist} />
      <H3>No Products found</H3>
  </Container>;
}

export default ProductError;
