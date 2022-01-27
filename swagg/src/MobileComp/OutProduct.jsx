import React, {useState,useEffect} from 'react'
import styled from 'styled-components' ; 
import {homeProducts} from '../utils/homeProducts.js' ; 
import Product from './Product.jsx';
import { Grid } from '@mui/material';
import axios from 'axios' ; 


const URL = "https://swagg-backend.herokuapp.com";

const Container = styled.div `
margin-bottom: 50px;` ; 

const Wrapper = styled.div `
display:grid; 
grid-template-columns: 1fr 1fr;
grid-template-rows: max-content; 
justify-content:center;
align-items:center;  
text-align:center;
`



function OutProduct({cat,filters,sort}) {
    console.log(cat,filters,sort) ; 
    const [products, setProducts] = useState([]) ; 
    const [filteredProducts, setFilteredProducts] = useState([]) ;  

    useEffect( ()=> {
        const getProducts = async()=> {
            try {
                    const res = await axios.get(cat? `${URL}/api/products/?category=${cat}`:`${URL}/api/products`);
                    setProducts(res.data); 
            }
            catch(err){
                    console.log(err) ; 
            }
        }
        getProducts() ; 
    },[cat]);
    console.log(products); 
    console.log(filters)  ;
    useEffect(()=>{
        cat && filters && setFilteredProducts(
            products.filter(item=>Object.entries(filters).every(([key,value])=>
                item[key].includes(value)
            )
        ));     
    },[cat,filters,sort]); 
    console.log(filteredProducts);
    return (
        <Container>        
           <Wrapper>        
           {filteredProducts.map((product)=> {
           return (<Product item = {product}  key = {product._id} />) ; 
       })}
       
           </Wrapper>
        </Container>
    )
}

export default OutProduct ; 
