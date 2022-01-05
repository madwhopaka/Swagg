import styled from 'styled-components' ; 
import dod1 from '../images/dod1.jpg' ; 
import dod2 from '../images/dod2.jpg' ;
import dod3 from '../images/dod3.jpg' ;
import dod4 from '../images/dod4.jpg' ;
import {Grid} from '@mui/material' ; 

const Container = styled.div `
margin-top:40px; 
display:flex; 
flex-direction:column; 
justify-content:center;
background-color: whitesmoke;
padding: 10px ;
align-items:center;
text-align:center; 
`

const Title = styled.h1 `
display:flex;
color:#3E4152;
letter-spacing : 5px;
margin-bottom: 20px; 
`

const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;
text-align:center;
`
const ImgContainer = styled.div `
margin-right:10px; 
`
const Image = styled.img`
height:360px;
width:100%; 
`

function DealofDay() {
    const imageList = [
        {
            id: 1 , 
            image :  dod1, 

        }, 
        {
            id: 2 , 
            image :  dod2, 

        },
        {
            id: 3, 
            image :  dod3, 

        },
        {
            id:4 , 
            image: dod4 , 
        }
     ]
    
    return (
        <Container>
          <Title>DEALS OF THE DAY</Title>
          <Wrapper>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg :4  }}>
              {imageList.map((img)=> { return ( <Grid  item  lg = {3} md = {6} style = {{textAlign:"center", marginBottom:20}}> 
                <Image src= {img.image} />
              </Grid>)  })}
              </Grid>
          </Wrapper>
        </Container>
    )
}

export default DealofDay
