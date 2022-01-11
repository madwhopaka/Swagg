import React from 'react'
import styled from 'styled-components' ; 
import pro1 from '../images/pro1.jpg' ; 
import pro2 from '../images/pro2.jpg' ; 
import pro3 from '../images/pro3.jpg' ; 
import pro4 from '../images/pro4.jpg' ; 
import pro5 from '../images/pro5.jpg' ; 
import pro6 from '../images/pro6.jpg' ; 
import pro7 from '../images/pro7.jpg' ; 
import pro8 from '../images/pro8.jpg' ; 
import pro9 from '../images/pro9.jpg' ; 
import Product from './Product';
import {homeProducts} from '../utils/homeProducts.js' ; 
import {Grid} from '@mui/material';


 const Title = styled.h2 `
   margin-top: 20px; 
   display:flex;
   color:#3E4152;
   `
const Container = styled.div `
   display:flex; 
   text-align:left;  
   flex-direction:column; 
   justify-content:center;
   padding: 100px ;
   backdrop-filter: blur(10px);
   background-color: whitesmoke; 
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   padding-top: 30px ;
   margin-bottom:0px; 
   align-items:center;`


const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;  
text-align:left;
`


function Products() {
    
    const title = "Dresses" ; 
    const titleheading = title.toUpperCase() ; 
    return (
       <React.Fragment>
            <ProductsComp />
       </React.Fragment>
    )
}

export default Products



function ProductsComp() {
    return (
        <Container>
        <Wrapper>
        <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3, lg :1  }} sx = {{display:"flex",alignItems:"center" , justifyContent:"center", width:"80%", padding: "40px"}}>
       {homeProducts.map((product)=> {
           return (<Product item = {product}  key = {product.id} />) ; 
       })}
       </Grid>
       </Wrapper>
      </Container>
    )
}


