import React from 'react'
import Anouncement from '../Components/Anouncement'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import styled from 'styled-components'
import Footer from '../Components/Footer' 
import prode1 from '../images/prode1.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Container = styled.div `
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
`
const ImgContainer = styled.div `
flex:1 ;`
const Wrapper = styled.div`
padding:50px ; 
display:flex; ` 


const InfoContainer = styled.div `
margin : 10px ;
flex:1;
padding: 0px 50px ;`

const Image = styled.img`
width: 90%;
object-fit: cover;
 `


const Title = styled.h1`
font-weight: 400;` 
const Desc = styled.p `
margin:20px 0px;
color: #929191; 
` 
const Brand = styled.h3 `
margin:10px 0px ;
color: #2C4152; 
font-weight: 500;
font-size:25px;`


const Price = styled.h3 `
font-weight: 200;
font-size: 40px ;
margin-right: 10px;
`

const PriceContainer = styled.div `
width: 50%; 
display: flex;
align-items: center;
justify-content: start  ;`


// const Cut = styled.strike `
//     font-weight: 100;
//     font-size: 30px;
//     color: grey; 
// `

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%; 
margin : 30px 0px; ` ; 

const Filter = styled.div`
display:flex ;
align-items: center;
justify-content:space-between;` ; 

const FilterColor = styled.div`
height:30px; 
width: 30px; 
border-radius: 50%; 
background: ${props=>props.color};
margin:  0px 5px ;
cursor: pointer;
border: 2px linen black ;
` ; 
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px ;` ; 
const FilterSizeOption = styled.option`` ; 
const FilterTitle = styled.span`
font-weight: 200;
margin:10px 0px ;
font-size: 20px ;
` ; 


const AddContainer = styled.div `
width: 50%; 
display: flex;
align-items: center;
justify-content: space-between;

` ; 


const AmountContainer = styled.div `
display:flex; 
justify-content: space-between;
margin-left: 40px;
align-items:center; 
font-weight: 700;
` ; 
const Amount = styled.span `
border:1px solid teal; 
align-items: center;
padding : 0 5px; 
font-size: 20px;
margin: 0 5px ;
display: flex;
justify-content: center;
height: 30px; 
width: 30px ; 
border-radius: 10px ;
` ; 
const Button = styled.button `
outline:none ; 
padding : 10px; 
background:white; 
border : 3px solid #2C4152 ; 
font-weight: 600;

&:hover {
    background: whitesmoke ;
}
` ; 





function ProductDetail() {
    return (
      <Container>
          <Nav />
          <Anouncement />
          <Wrapper>
              <ImgContainer>
              <Image src = {prode1} />
              </ImgContainer>
              <InfoContainer>
              <Brand>CAMPUS SUTRA</Brand>
                  <Title>
                      ColourBlack Hooded Sweatshirt 
                  </Title>
                  <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti tempora culpa adipisci distinctio voluptates, quo possimus enim veniam dolor similique officia quae nobis, beatae, aperiam cum ex labore quis eligendi.</Desc>
                  <PriceContainer><Price>Rs. 1,000</Price> <strike style = {{color:"grey", fontWeight: "100",fontSize: "20px;"}}>1,699</strike></PriceContainer>
                  <p style = {{color:"grey"}}>Price inclusive of all taxes</p>
                  
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color:</FilterTitle>
                              <FilterColor color = "black"></FilterColor>
                              <FilterColor color = "grey"></FilterColor>
                              <FilterColor color = "maroon"></FilterColor>
                      </Filter>
                      <Filter>
                          <FilterTitle>Size :</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                              
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <RemoveIcon/>
                          <Amount>0</Amount>
                          <AddIcon />
                      </AmountContainer>
                      <Button>ADD TO CART </Button>
                  </AddContainer>
                 </InfoContainer>

          </Wrapper>
          <Newsletter />
          <Footer />

      </Container>
    )
}

export default ProductDetail
