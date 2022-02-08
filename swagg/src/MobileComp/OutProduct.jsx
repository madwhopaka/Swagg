import React, {useState,useEffect} from 'react'
import styled from 'styled-components' ; 
import {homeProducts} from '../utils/homeProducts.js' ; 
import Product from './Product.jsx';
import { Grid } from '@mui/material';
import axios from 'axios' ; 
import ProductError from '../Components/ProductError.jsx';
import Loading from '../Components/Loading.jsx';


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
    const [backdrop, setBackdrop] = useState(false) ; 

    useEffect( ()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const getProducts = async()=> {
            try {    
                    const res = await axios.get(cat? `${URL}/api/products/?category=${cat}`:`${URL}/api/products`);
                    console.log(res.data) ; 
                    setBackdrop(true) ;
                    setProducts(res.data); 
                    // setFilteredProducts(res.data) ; 
                  
            }
            catch(err){
                    console.log(err) ; 
            }
        }
        getProducts() ; 
        setTimeout(() => {
            setBackdrop(false) ; 
        }, 2000);
    },[cat]);
    


    useEffect(async ()=>{
      
           await cat && setFilteredProducts(
                products.filter(item=>Object.entries(filters).every(([key,value])=>
                       item[key].includes(value)
                   )
               )); 

            console.log(filteredProducts) ;
        
    },[products,cat,filters]); 

    useEffect(()=>{
        if (sort==='newest') {setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt - b.createdAt)); }

        else if (sort=='low')
        {setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price- b.price)) ; }

        else if (sort=='high') 
        {setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price)) ; }
       
    },[sort]);


    return (
        <Container>  
         {backdrop?<Loading backdrop = {backdrop} />:<Wrapper>
       
       {filteredProducts!=[]?filteredProducts.map((product)=> {
           return (<Product item = {product}  key = {product._id} />) ; 
       }): <ProductError />}
       </Wrapper>}
        </Container>
    )
}

export default OutProduct ; 
