import React from 'react'
import styled from 'styled-components' ; 
import {homeProducts} from '../utils/homeProducts.js' ; 
import Product from './Product.jsx';
import { Grid } from '@mui/material';


const Container = styled.div `
margin-top: 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);` ; 

const Title  = styled.h3 `
font-size: 25px;
padding: 10px ;
text-align: center;
color:#3E4152;
margin-bottom: 20px; `

const Wrapper = styled.div `
display:grid; 
grid-template-columns: 1fr 1fr;
grid-template-rows: max-content    ; 
justify-content:center;
align-items:center;  
text-align:center;
`



function TrendingList() {
    return (
        <Container>
           <Title>TRENDING FASHION</Title>
           <Wrapper>
           
           {homeProducts.map((product)=> {
           return (<Product item = {product}  key = {product.id} />) ; 
       })}
       
           </Wrapper>
        </Container>
    )
}

export default TrendingList
