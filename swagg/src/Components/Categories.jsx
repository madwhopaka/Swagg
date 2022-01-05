import styled from 'styled-components' ; 
import Grid from '@mui/material/Grid' ; 
import cat1 from '../images/cat1.jpg' ; 
import cat2 from '../images/cat2.jpg' ; 
import cat3 from '../images/cat3.jpg' ; 
import cat4 from '../images/cat4.jpg' ; 
import cat5 from '../images/cat5.jpg' ; 
import cat6 from '../images/cat6.jpg' ; 
import cat7 from '../images/cat7.jpg' ;
import cat8 from '../images/cat8.jpg' ; 

// import  categories from '../data.js/categories'

const categories = [
    { 
        id: 1 , 
        image : cat1, 
        name: "Men's Jackets"
    },
    { 
       id: 2 , 
       image :cat2, 
       name: "Women's Sweatshirts",
   },
   { 
       id: 3 , 
       image : cat3, 
       name: "Women's Sweaters"
   },
   { 
       id: 4 , 
       image : cat4, 
       name: "Men's Sweatshirts"
   },{ 
       id: 5 , 
       image : cat5, 
       name: "Dresses"
   },
   { 
       id: 6 , 
       image : cat6, 
       name: "Casual Shirts"
   },
   { 
       id: 7, 
       image : cat7, 
       name: "Modern Kurtas"
   },{ 
       id: 8 , 
       image : cat8, 
       name: "Jeans"
   }
   ]


const Title = styled.h1 `
display:flex;
color:#3E4152;
letter-spacing : 5px;
margin-bottom: 20px; 
`
const Container = styled.div `
margin-top:40px; 
display:flex; 
text-align:center; 
flex-direction:column; 
justify-content:center;
padding: 10px ;
align-items:center;

`
const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;
text-align:center;
`
const ImgContainer = styled.div `
flex:1 ;
margin-left:50px;
text-align:center;
`
const Image = styled.img`
width: 85%;     
`

const Name = styled.h3`
color: gray ;
`
function Categories() {
    return (
       <Container>
             <Title>TOP CATEGORIES</Title>
        <Wrapper>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg :1 }}>
             
            {categories.map((cat)=> {
                return (
                  
                    <Grid  item  lg = {3} md = {4} style = {{textAlign:"center", marginBottom:20}}> 
                    
                     <Image src = {cat.image} />
                     <Name>{cat.name}</Name>
                    </Grid >
                    
                  
                )
            })}
              
            </Grid>
        </Wrapper> 
       </Container>
    )
}

export default Categories
