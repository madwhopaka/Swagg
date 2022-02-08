import React, { useEffect, useState} from 'react'
import Anouncement from '../Components/Anouncement'
import { useLocation } from 'react-router-dom'
import Nav from '../Components/Nav'
import Newsletter from '../Components/Newsletter'
import styled from 'styled-components'
import Footer from '../Components/Footer' 
import prode1 from '../images/prode1.jpg';
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive'
import { publicRequest } from '../requestMethods';
import Loading from '../Components/Loading' ; 
import { useDispatch } from 'react-redux' ;
import { addProduct } from '../redux/cartRedux'



const BASE_URL = "https://swagg-backend.herokuapp.com/api";

function ProductDetail() {

    const location = useLocation() ; 
    const id = location.pathname.split('/')[2] ; 
    console.log(id) ; 
    const [product, setProduct] = useState({}) ; 
    const [backdrop, setBackdrop] = useState(false) ; 
    const [quantity, setQuantity] = useState(1) ; 
    const [color, setColor] = useState("") ; 
    const [size, setSize] = useState("") ; 
    const dispatch = useDispatch() ; 

    const handleAddtoCart = ()=> {
      dispatch(addProduct({...product,quantity,color,size})) ; 
    }

    const handleQuantity = (para)=> {
        if (para==="a") setQuantity(quantity+1) ; 
        else if (para==="d"&& quantity>1) setQuantity (quantity-1) ; 
    }

    useEffect (()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const getProduct = async ()=>{
            try {
                 const res  = await axios.get(`${BASE_URL}/products/find/${id}`);
                 console.log(res);
                 setBackdrop(true) ;
                 setProduct(res.data) ; 
                 console.log(product) ; 
                 setTimeout(() => {
                    product && setBackdrop(false) ; 
                }, 2000);
            }
            catch(err) {
                console.log("Hello how are you ? ") ; 
                console.log(err) ; 
            }
        }
        getProduct() ; 
        

    },[id]);

    return (
      <Container>
          <Nav />
          <Anouncement />
          <Wrapper>
         {backdrop && !product ? <Loading backdrop ={backdrop}/>:<React.Fragment> <ImgContainer>
              <Image src = {product.image} />
              </ImgContainer>
              <InfoContainer>
              <Brand>{product.brand}</Brand>
                  <Title>
                {product.title}
                  </Title>
                  <Desc>{product.desc}</Desc>
                  <PriceContainer><Price> Rs. {product.price}</Price> <strike style = {{color:"grey", fontWeight: "100",fontSize: "20px"}}>{product.cutprice}</strike></PriceContainer>
                  <P style = {{color:"grey"}}>Price exclusive of taxes</P >  
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color:</FilterTitle>
                           {
                            product.color && product.color.map((color)=>{
                                   return <FilterColor color = {color} key = {color} onClick = {()=>setColor(color)}></FilterColor>
                               })
                           }                    
                      </Filter>
                      <Filter>
                          <FilterTitle>Size :</FilterTitle>
                          <FilterSize onChange= {(e)=> {console.log(e.target.value); setSize(e.target.value);}} >
                           { product.size &&  product.size.map((size)=>{
                                 return  <FilterSizeOption key = {size} >{size}</FilterSizeOption>
                                 
                             })}
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <RemoveIcon onClick = { ()=> {handleQuantity("d")}}/>
                          <Amount>{quantity}</Amount>
                          <AddIcon onClick = {()=>{handleQuantity("a")}} />
                      </AmountContainer>
                      <Button onClick = {handleAddtoCart}>ADD TO CART </Button>
                  </AddContainer>
                 </InfoContainer></React.Fragment>
}
          </Wrapper>
          <Newsletter />
          <Footer />

      </Container>
    )
}

export default ProductDetail




const Container = styled.div `
align-items: center;
justify-content: center;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);

`
const ImgContainer = styled.div `
flex:1 ;
display: flex;
justify-content: center;
${mobile({display:"flex", flexDirection:"column", padding:"10px", alignItems:"center"})}
`

const Wrapper = styled.div`
padding: 50px;
${mobile({boxShadow:"0px 5px 5px 0px rgba(0,0,0,0.3)"})}
display:flex;
${mobile({flexDirection:"column", padding:"20px", alignItems:"center", justifyContent:"center"})}
 ` 


const InfoContainer = styled.div `
margin : 10px ;
flex:1;
display:flex; 
flex-direction : column; 
padding: 20px;
justify-content: center; 
${mobile({flexDirection:"column", padding:"10px",  alignItems:"center", justifyContent:"center"})}
;`

const Image = styled.img`
width: 70%;
${mobile({width:"90vw"})}
object-fit: cover;
 `

const Title = styled.h1`
font-weight: 400;
${mobile({fontSize:"25px", textAlign:"center"})}
` 
const Desc = styled.p `
margin:20px 0px;
${mobile({ textAlign:"center"})}
color: #929191; 
` 
const Brand = styled.h3 `
margin:10px 0px ;
color: #2C4152; 
font-weight: 500;
${mobile({fontSize:"20px", textAlign:"center"})}
font-size:25px;`


const Price = styled.h3 `
font-weight: 200;
font-size: 40px ;
${mobile({fontSize:"30px", textAlign:"center", margin:"0px 10px 10px 0px"})}
margin-right: 10px;
`

const PriceContainer = styled.div `
width: 50%; 
${mobile({ textAlign:"center", width: "100%", display:"flex",justifyContent:"center", alignItems:"center"})}
display: flex;
align-items: center;
justify-content: start ;`


// const Cut = styled.strike `
//     font-weight: 100;
//     font-size: 30px;
//     color: grey; 
// `

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
${mobile({width: "100%", flexDirection:"column", textAlign:"center", justifyContent:"center", alignItems:"center"})}
width: 50%; 
margin : 30px 0px; ` ; 

const Filter = styled.div`
display:flex ;
align-items: center;
${mobile({justifyContent:"space-between", alignItems:"center"})}
justify-content:space-between;` ; 

const FilterColor = styled.div`
height:30px; 
width: 30px; 
${mobile({height:"25px", width:"25px"})}
border-radius: 50%; 
background: ${props=>props.color};
margin:  0px 5px ;
cursor: pointer;
border: 2px linen black ;
` ; 
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px ;` ; 


const FilterSizeOption = styled.option`
${mobile({padding:"20px"})}` ; 

const FilterTitle = styled.span`
font-weight: 200;
margin:10px 0px ;
font-size: 20px ;
` ; 


const AddContainer = styled.div `
width: 50%; 
display: flex;
align-items: center;
${mobile({ textAlign:"center", width:"100%", justifyContent:"center", margin:"0px"})}
justify-content: space-between;

` ; 


const AmountContainer = styled.div `
display:flex; 
justify-content: space-between;
margin-left: 40px;
${mobile({marginLeft:"-15px", marginRight:"10px"})}

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
transition: 0.5s ease-out  ;
padding : 10px; 
background:white; 
box-shadow: 2px 2px 5px gray;
${mobile({ textAlign:"center", transition: "0.3s ease-in"})}
border : 2px solid #2C4152 ; 
font-weight: 600;

&:hover {
    background: #2C4152 ;
    color: white ;
}

&:active {
 box-shadow: 0px 0px 0px ; 
 

}
   
&::before {
    ${mobile({ textAlign:"center", borderRadius:"20px", border:"none", background:"#2C4152", color:"white"})}
}
&::after{
    ${mobile({background:"slateblue", transform:"scale(1.05)"})}
}

`






const P = styled.p `
${mobile({color:"lightgray", textAlign:"center  "})}`
