import React from 'react'
import styled from 'styled-components' ; 
import pro1 from '../images/pro1.jpg' ; 
import { Link } from 'react-router-dom';
import pro2 from '../images/pro2.jpg' ; 
import pro3 from '../images/pro3.jpg' ; 
import pro4 from '../images/pro4.jpg' ; 
import pro5 from '../images/pro5.jpg' ; 
import pro6 from '../images/pro6.jpg' ; 
import pro7 from '../images/pro7.jpg' ; 
import pro8 from '../images/pro8.jpg' ; 
import pro9 from '../images/pro9.jpg' ; 
import {Grid} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './grid.css'


const ImgContainer = styled.div `
flex:1 ;
width:90% ;
padding-bottom: 20px ;
position:relative; 
transition: 0.2s ease-in;
 &:hover{

    
} 

text-align:center;
`

const IconContainer = styled.div`
display:flex; 
position: absolute ;
top:0 ;     
bottom: 0 ; 
left: 0 ;
flex-direction: column;
right: 0 ; 
margin:auto ; 
padding: 10px; 
justify-content: center;
display:none; 
align-items: center;
transition: 0.2s ease-in ;
${ImgContainer}:hover & {
        display:flex; 
        
  }

`





const Image = styled.img`
width: 100%;  
transition: 0.3s ease-in;
${ImgContainer}:hover & {
        opacity: 0.7;
        transform: scale(1.01);
  }


`

const Name = styled.h3`
color: black ;
font-size:14px ;
font-weight:500 ;
`

const Price = styled.p`
 font-size:15px ;
 font-weight: 900; 

`
const PriceContainer = styled.div`
display:flex;
margin-top:10px;
align-items:center;
justify-content:center;
text-align:center;
`



const ViewMore = styled.button `
padding:5px 20px ;
width: 60%; 
border: 1px solid black ;
outline: none ;
background: transparent; 
margin-top:15px ;
transition: 0.3s ease-in;
&:hover {
    background:gray; 
    color:white; 
    border:none ;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
`



function Product(props) {
   const item_link  = `/product/${props.item._id}`
    return (
     
      <Grid  className='grid' item sm={12}  lg = {3} md = {4} style = {{textAlign:"center", marginBottom:20 }} >
        <ImgContainer > 
       <Image src = {props.item.image} />
       <IconContainer>
         <Link to= {item_link}> <SearchIcon style = {{margin:10,color:"black  "}} />
         </Link>
          <LocalMallOutlinedIcon style = {{margin:10}} />
           <FavoriteBorderOutlinedIcon style = {{margin:10}}/>
         
       </IconContainer>
       <p style = {{fontWeight:800}}>{props.item.brand.toUpperCase()}</p>
       <Name>
           {props.item.title}
       </Name>
       <PriceContainer>
       <Price>Rs. {props.item.price}</Price>
       <strike style = {{fontSize:12, color: "gray",marginLeft:5}}>Rs. {props.item.cutprice}</strike>
       </PriceContainer>  
       <ViewMore>View Details</ViewMore>
        </ImgContainer>
       
       </Grid>
    )
}

export default Product
