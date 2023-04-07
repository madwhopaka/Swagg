import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import pro1 from '../images/pro1.jpg';
import pro2 from '../images/pro2.jpg';
import pro3 from '../images/pro3.jpg';
import pro4 from '../images/pro4.jpg';
import pro5 from '../images/pro5.jpg';
import pro6 from '../images/pro6.jpg';
import pro7 from '../images/pro7.jpg';
import pro8 from '../images/pro8.jpg';
import pro9 from '../images/pro9.jpg';
import Product from './Product';
import axios from 'axios';
import { homeProducts } from '../utils/homeProducts.js';
import Loading from './Loading';
import { Grid } from '@mui/material';
import ProductError from './ProductError';

const URL = "https://swagg-backend-production.up.railway.app";


const Title = styled.h2`
   margin-top: 20px; 
   display:flex;
   color:#3E4152;
   `
const Container = styled.div`
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


const Wrapper = styled.div`
display:flex ;
justify-content:center;
align-items:center;  
text-align:left;
`


function Products({ cat, filters, sort }) {
    console.log(cat, filters, sort);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const getProducts = async () => {
            try {
                setLoading(true);
                const res = await axios.get(cat ? `${URL}/api/products/?category=${cat}` : `${URL}/api/products`);
                console.log(res); 
                setProducts(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && filters && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            )
            ));
    }, [products, cat, filters]);


    useEffect(() => {
        if (sort === 'newest') { setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt)); }

        else if (sort == 'low') { setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price)); }

        else if (sort == 'high') { setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price)); }

    }, [sort]);



    return (
        <Container>
            {loading ? <Loading backdrop={loading} /> : <Wrapper>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3, lg: 1 }} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "80%", padding: "40px" }}>
                    {filteredProducts.map((product) => {
                        return (<Product item={product} key={product.id} />);
                    })}
                </Grid>
            </Wrapper>}
        </Container>
    )
}

export default Products





