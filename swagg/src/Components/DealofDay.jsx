import styled from 'styled-components' ; 
import dod1 from '../images/dod1.jpg' ; 
import dod2 from '../images/dod2.jpg' ;
import dod3 from '../images/dod3.jpg' ;
import dod4 from '../images/dod4.jpg' ;
import React, {useState,useEffect} from 'react' ; 
import {Grid} from '@mui/material' ; 
import Dealofday from '../MobileComp/Dealofday';
import { mobile } from '../responsive';
import {imageList} from '../utils/imageList.js';

const Container = styled.div `
margin-top:40px; 
display:flex; 
${mobile({width:"100vw"})};
flex-direction:column; 
justify-content:center;
background-color: whitesmoke;
padding-top:20px ;
padding-bottom:50px ;
box-shadow: 5px 5px 15px rgba(white, .5);
align-items:center;
text-align:center; 
`

const Title = styled.h1 `
display:flex;
color:#3E4152;
${mobile({letterSpacing:"0px", fontSize: "20px"})};
letter-spacing : 5px;
margin-bottom: 20px; 
`

const Wrapper = styled.div `
display:flex ;
${mobile({flexDirection:"column"})};
justify-content:center;
align-items:center;
text-align:center;
`


const ImgContainer = styled.div `
margin-right:10px; 
`
const Image = styled.img`
height:360px;
${mobile({width: "100%", padding: "2px"})};
`

function DealofDay() {
   

     const width  = window.innerWidth ;
    const height = window.innerHeight;
    const [screenHeight, setHeight] = useState(height) ; 
    const [screenWidth, setWidth] = useState(width) ;   

    useEffect(() => {
        setWidth(window.innerWidth) ; 
        setHeight(window.innerHeight) ; 
    }, [window.innerHeight, window.innerWidth]);

    
    return (
        <React.Fragment>
            {screenHeight>screenWidth?<Dealofday/>:  <Container>
          <Title>DEALS OF THE DAY</Title>
          <Wrapper>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg :4  }}>
              {imageList.map((img)=> { return ( <Grid  item  lg = {3} md = {6} style = {{textAlign:"center", marginBottom:20}}> 
                <Image src= {img.image} />
              </Grid>)  })}
              </Grid>
          </Wrapper>
        </Container>}
          
        </React.Fragment>
    )
}

export default DealofDay
