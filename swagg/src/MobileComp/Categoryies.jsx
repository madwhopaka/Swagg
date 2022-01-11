import styled from 'styled-components'  ;
import  {categories} from '../utils/categories'
import { Grid } from '@mui/material';


const Container  = styled.div `
display: flex;
flex-direction: column; 
width: 100%; 
align-items: center;
justify-content: center;
` ; 
const Title = styled.h1 `
font-size: 25px;
margin-top:10px; 
text-align: center;
color:#3E4152;
margin-bottom: 20px; `

const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;
text-align:center;
`


const Image = styled.img`
width: 35vw;  

border-radius  :50% ;
`

const Name = styled.h3`
font-size: 12px;
color:#3E4152; 
`

function Categoryies() {
    return (
      <Container>
          <Title>
              TOP CATEGORIES
          </Title>
          <Wrapper>
          <Grid container rowSpacing={1} style = {{display:"flex", alignItems:"center", justifyContent:"center"}} columnSpacing={{ xs: 1, sm: 2, md: 3, lg :1 }}>
             
             {categories.map((cat)=> {
                 return (
                   
                     <Grid  item  sm = {6} lg = {3} md = {4} style = {{textAlign:"center", margin:"10px"}}>  
                      <Image src = {cat.image} />
                      <Name>{cat.name.toUpperCase()}</Name>
                     </Grid >      
                 )
             })}
               
             </Grid>
          </Wrapper>

      </Container>
    )
}

export default Categoryies
