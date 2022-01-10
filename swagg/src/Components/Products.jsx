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
import {Grid} from '@mui/material';

 const homeProducts = [
    { 
        id: 1 , 
        image : pro1, 
        brand: "Campus Sutra", 
        name: "Textured Jacket with Pockets", 
        price : "1,399" , 
        cutprice: "1799"

    },
    { 
       id: 2 , 
       image : pro2, 
       brand: "Dennislingo", 
       name: "Full Sleeves Slim Fit Shirt",
       price : "592" ,
       cutprice: "650"
   },
   { 
       id: 3 , 
       image : pro3, 
       brand: "Dennislingo", 
       name: "Colourblock Crew- Neck T-shirt",
       price : "587", 
       cutprice: "789", 
   },
   { 
       id: 4, 
       image : pro4, 
       brand: " Queen Be", 
       name: "Kundan Perals Necklace Set",
       price : "3,920",
       cutprice: "4999", 
   },{ 
       id: 5, 
       image : pro5, 
       brand: "UNITED COLORS", 
       name: "Full Sleeves White Shirt",
       price : "752",
       cutprice: "999",
   },
   { 
       id: 6 , 
       image: pro6,
       brand: "BITTERLIME", 
       name: "Block Print Kurta Set",
       price : "1,100",
       cutprice : "1,599"
   },
   { 
       id: 7, 
       image : pro7, 
       brand: "CAMPUS SUTRA", 
       name: "Colourblock Crew-Neck T-shirt",
       price : "592",
       cutprice : "949"
   },{ 
       id: 8 , 
       image : pro8, 
       brand: "MIMOSA", 
       name: "Kanjivaram Art Silk Saree",
       price : "2,400",
       cutprice: "3199"
   },
    //  { id: 9, 
    //   image: pro9, 
    //   brand: "Dennislingo", 
    //    name: "Full Sleeves Slim Fit Shirt",
    //    price : "592"
    //  }
   ]
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

export default Products
