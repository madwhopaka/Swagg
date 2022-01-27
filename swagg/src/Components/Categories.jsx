import styled from 'styled-components' ; 
import Grid from '@mui/material/Grid' ; 
import React, {useState,useEffect} from 'react' ; 
import {Link} from 'react-router-dom' ; 
import cat1 from '../images/cat1.jpg' ; 
import cat2 from '../images/cat2.jpg' ; 
import cat3 from '../images/cat3.jpg' ; 
import cat4 from '../images/cat4.jpg' ; 
import cat5 from '../images/cat5.jpg' ; 
import cat6 from '../images/cat6.jpg' ; 
import cat7 from '../images/cat7.jpg' ;
import cat8 from '../images/cat8.jpg' ; 
import bgimg from '../images/bgimg.png';
import { mobile } from '../responsive';
import Categoryies from '../MobileComp/Categoryies';
import  {categories} from '../utils/categories'



const Title = styled.h1 `
display:flex;
/* color:#3E4152; */
letter-spacing : 5px;
margin-bottom: 20px; 
`
const Container = styled.div `
display:flex; 
background: url(${bgimg});
background-position:100%;
color: white ;
text-align:center; 
flex-direction:column; 
justify-content:center;
padding: 50px 200px ; 
${mobile({padding:"20px", color: "black"})}

align-items:center;
`
const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;
text-align:center;
`



const Image = styled.img`
width: 85%;    
`

const Name = styled.h3`
/* color: gray ; */  

`
function Categories() {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    useEffect(() => {
        function handleResize() {
            setDimensions({
              height: window.innerHeight,
              width: window.innerWidth
            });
        }

        window.addEventListener('resize', handleResize);
    });



    return (
       <React.Fragment>
            {dimensions.height>dimensions.width?<Categoryies />:<CategoryComp />}
       </React.Fragment>
    )
}

export default Categories





function CategoryComp() {
    return (
        <Container>
             <Title>TOP CATEGORIES</Title>
        <Wrapper>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg :1 }}>
             
            {categories.map((cat)=> {
                const url = `/products/${cat.cat[0]}`;
                return (
                    <Grid  item  sm = {3} lg = {3} md = {4} style = {{textAlign:"center", marginBottom:20}}> 
                         <Link to = {url} style= {{textDecoration:"none", color:"white"}} >
                     <Image src = {cat.image} />
                     <Name>{cat.name.toUpperCase()}</Name>
                     </Link>
                    </Grid >
                    
                    
                  
                )
            })}
              
            </Grid>
        </Wrapper> 
       </Container>
    )
}


