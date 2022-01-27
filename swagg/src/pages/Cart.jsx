
import React from 'react'
import styled from 'styled-components'
import Anouncement from '../Components/Anouncement';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Newsletter from '../Components/Newsletter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive.js';
import mobileband from '../images/final-band-mobile.png'

const Container = styled.div `
${mobile({display:"flex", flexDirection:"column", justifyContent:"center" })}` ; 

const Wrapper = styled.div `
padding: 0px 50px  
${mobile({padding:"0px 20px"})};` 


const Title = styled.h1  `
text-align:center;
font-weight: 400;
padding-top:20px;
font-size: 25px;
color: #302f2f;` ; 


const Top =  styled.div `
display: flex; 
justify-content: space-between;
padding: 20px ;
margin:10px;
align-items: center;` ;

const TopButton = styled.button`
padding:10px; 
font-weight: 600;
cursor : pointer;
${mobile({backgroundColor:`${(props)=>props.type =="filled" ? "black":"mediumseagreen"}` , border:"1px solid #3b3c36"})}
border: ${(props)=>props.type =="filled" && "none"} ;
background-color : ${(props)=> props.type=="filled"? "#242323" :"transparent" }; 
color: ${(props)=> props.type =="filled" ? "white" : "#242323" };

` ; 

const TopTexts = styled.div `
${mobile({display:"none"})}`; 

const TopText = styled.span `
cursor:pointer;
text-decoration: underline ;
margin: 0px 10px; 
` ; 

const Bottom =  styled.div `
display:flex;
${mobile({flexDirection:"column", alignItems:"center"})}
justify-content: space-between;` ;



const Info = styled.div `
flex:3;
${mobile({marginBottom:"20px"})}
` ; 


const Product = styled.div`
display: flex;
justify-content:space-around;
${mobile({flexDirection:"column", marginBottom:"20px"})}` 

const Hr = styled.hr `
    margin : 0px 14px;
    background-color: #eee; 
    height: 1px ;
    border: none ; 
`

const ProductDetails = styled.div`
flex:2; 
display:flex;
${mobile({ justifyConten:"space-between", flex:"1", width: "100%"})}` ;

const Image = styled.img`
width: 150px;
${mobile({width:"150px", height:"180px"})}
margin:15px;` ;

const Details = styled.div`
display:flex ; 
padding:30px 10px;
flex-direction:column ; 
justify-content: space-around;` ;

const ProductName = styled.span `
${mobile({fontSize:"14px"})}
` ; 
const ProductId = styled.span `` ; 

const ProductSize = styled.span `
` ;
const ProductColor = styled.div` 
border-radius: 50%;
height: 20px; 
width: 20px ;
background-color: ${(props)=> props.color};
`  ;

const PriceDetails = styled.div `
display:flex ; 
margin-right: 40px ;
flex-direction: column ; 
${mobile({flexDirection:"row", justifyContent:"space-around"})}
justify-content: center;
align-items: center;` ; 

const ProductAmountContainer = styled.div `
display:flex ;
justify-content: center; 
align-items:center;
margin-bottom: 20px ;
${mobile({marginBottom:"0px" , marginRight:"15px", border: "0.5px solid lightgray", padding:"0px 5px",   marginBottom:"5px"})}
 ` ;

const ProductPrice = styled.div `
font-size:25px ;
font-weight: 200;
${mobile({fontSize:"20px" ,fontWeight:"600", display:"flex"})}` ; 

const Price = styled.span`
    display:"none" ;

    ${mobile({display:"flex", marginRight:"10px", fontSize:"18px" , fontWeight:"300" })}
`

const ProductAmount = styled.div `
font-size: 20px;
margin:5px;` ; 

const  Summary = styled.div `
flex:1 ;
display:flex; 
height: 50vh;
flex-direction: column;
${mobile({width:"90%",  justifyContent:"center", color:"#3b3c36"})}
margin: 20px ;
border : 0.5px solid lightgray ;
border-radius: 10px;
` ; 

const SummaryTitle = styled.h1 `
margin: 10px ;
font-weight: 200;
${mobile({fontWeight:"400", fontSize: "25px", textAlign:"center"})}
` ; 


const SummaryItem = styled.div `
display: flex; 
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "600"};
font-size: ${props=>props.type==="total" && "24px"};
${mobile({fontSize: `${props=>props.type==="total" && "20px"}`})}

margin: 10px 0px ;` ; 

const SummaryItemText = styled.span `
margin: 5px 15px  ;` ; 
const SummaryItemPrice = styled.span `margin:5px 15px; ` ; 


const Button = styled.button `
margin: 10px ;
width: 50%;
padding:10px ;
${mobile({display:"flex", alignItems:"center", justifyContent:"center"})}
background-color: #242323;
font-weight: 600;
border : none ;
color: white;` ; 





const BandImage = styled.img `
display:"none" ; 
${mobile({display:"flex",alignItems:"center",width:"100vw",margin:"5px 0px 20px 0px" })}
`

function Cart() {
    return (
       <Container>
           <Nav />
           <Anouncement />
           <Wrapper>
               <Title> YOUR BAG </Title>
               <Top>
               <TopButton>CONTINUE ADDING</TopButton>
               <TopTexts>
               <TopText>Shopping Bag(2)</TopText>
               <TopText>Your Wishlist(0)</TopText>
               </TopTexts>
               <TopButton type ="filled">CHECKOUT NOW</TopButton>
               </Top>
               <Bottom>
                   <Info><Product>
                       <ProductDetails>
                          <Image src = "https://cdn.shopify.com/s/files/1/0752/6435/products/BRISKGREENSWEATSHIRT_4_5a3f790b-2bf1-49a3-921b-d6a724db87e5_765x.jpg?v=1635397599"/>
                          <Details>
                          <ProductName><b>Product: </b>BRISK- MENS ZIPPER JACKET</ProductName>
                          <ProductId><b>Id: </b>23901920293</ProductId>
                          <ProductColor color='#CCD3CC' />
                          <ProductSize><b>Size: </b>41.5</ProductSize>
                          </Details>
                       </ProductDetails>   
                       <PriceDetails>
                           <ProductAmountContainer>
                               <AddIcon />
                            <ProductAmount>
                                2
                            </ProductAmount>
                               <RemoveIcon />
                           </ProductAmountContainer>
                           <ProductPrice>Rs. 4,500</ProductPrice>
                        </PriceDetails>  
                    </Product>
                    <Hr />
                    <Product>
                       <ProductDetails>
                          <Image src = "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16343204/2021/12/2/284f4219-a0fd-481c-8050-090b9ac4a33f1638441016731RedTapeMenBlack1.jpg"/>
                          <Details>
                          <ProductName><b>Product: </b>REDTAPE MEN BLACK SHOES</ProductName>
                          <ProductId><b>Id: </b>3923020293</ProductId>
                          <ProductColor color='black' />
                          <ProductSize><b>Size: </b>8</ProductSize>
                          </Details>
                       </ProductDetails>   
                       <PriceDetails>
                           <ProductAmountContainer>
                               <AddIcon />
                            <ProductAmount>
                                1
                            </ProductAmount>
                               <RemoveIcon />
                           </ProductAmountContainer>
                           <ProductPrice>Rs. 2,100</ProductPrice>
                        </PriceDetails>  
                    </Product>
                    <Hr />
                    </Info>
                   <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>Rs. 6,600</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Shipping Cost</SummaryItemText>
                           <SummaryItemPrice>Rs. 79</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Special Discount</SummaryItemText>
                           <SummaryItemPrice>- Rs. 81</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem type = "total">
                           <SummaryItemText>Total</SummaryItemText>
                           <SummaryItemPrice>Rs. 6,598</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CHECKOUT NOW</Button>
                   </Summary>
               </Bottom>
           </Wrapper>
           <BandImage src ={mobileband} alt = "hello"/>
           <Newsletter />
           <Footer />
       </Container>
    )
}

export default Cart
