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
import {Grid} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';


const ImgContainer = styled.div `
padding-bottom: 15px ;
width: 100%; 
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
margin-bottom: 20px ;
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
transition: 0.3s ease-in;
width: 180px;
height: 240px; 
${ImgContainer}:hover & {
        opacity: 0.7;
        transform: scale(1.01);
  }


`

const Name = styled.h3`
display:flex; 
justify-content: center;
color: black ;
font-size:14px ;
text-align: center;
font-weight:500 ;
`

const Price = styled.p`
 font-size:15px ;
 font-weight: 700; 

`
const PriceContainer = styled.div`
display:flex;
margin-top:10px;
align-items:center;
justify-content:center;
text-align:center;
`



const ViewMore = styled.button `
padding:5px 10px ;
font-size: 10;
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
    // console.log(`${process.env.PUBLIC_URL}/MobileComp/`) ;

    return (
     
     
       <ImgContainer > 
      
       <Image src= {props.item.image} />
       <IconContainer>
           <SearchIcon style = {{margin:10}} />
           <LocalMallOutlinedIcon style = {{margin:10}} />
           <FavoriteBorderOutlinedIcon style = {{margin:10}}/>
       </IconContainer>
       <p style = {{fontWeight:800, fontSize: "12px"}}>{props.item.brand.toUpperCase()}</p>
       <Name>
           {props.item.title}
       </Name>
       <PriceContainer>
       <Price>Rs. {props.item.price}</Price>
       <strike style = {{fontSize:10, color: "gray",marginLeft:5}}>Rs. {props.item.cutprice}</strike>
       </PriceContainer>  
       <ViewMore>View Details</ViewMore>
        </ImgContainer>

    )
}

export default Product
