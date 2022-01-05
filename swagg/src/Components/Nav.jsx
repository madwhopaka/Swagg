import React from 'react';
import styled from 'styled-components' ; 
import Search from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const Container = styled.div`
height: 60px; 
width : 100%; 
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
// background-color: black ; 
// color: white; 
`

const Wrapper = styled.div `
padding: 10px 20px ;
display:flex; 
justify-content : space-between;
align-items:center; 
`
const Left = styled.div `
display:flex; 
justitfy-content: center ; 
align-items: center;
flex:1`


const Language = styled.span `
font-size:14px ;
cursor: pointer ;
`
const SearchContainer = styled.div`
display:flex; 
border: 0.5px solid slateblue; 
justify-content: center; 
padding: 5px; 
margin-left:25px; 
align-items: center ; 
`

const Input = styled.input`
outline:none ;
border : none ;


`
const  Center= styled.div `
flex:1;
text-align:center;
`

const Logo = styled.h1 `
font-weight: bold;
font-style: italic; 
` ; 


const Right = styled.div `
display:flex ;
align-items:center;
justify-content:flex-end; 
flex:1;`;

const MenuItem = styled.div`
font-size: 14px; 
display:flex; 
margin-left:25px; 
cursor:pointer ; 
`



function Nav() {
    return (
        <Container>
           <Wrapper>
               <Left>
                  <Language>
                      EN
                  </Language>
                  <SearchContainer>
                      <Input placeholder='Shirts,Tshirts, Levis'></Input>
                     <Search sx = {{color:"gray", fontSize:25}} />
                  </SearchContainer>
               </Left>
               <Center>
                   <Logo>
                       SWAGG.
                   </Logo>
               </Center>
               <Right>
                   <MenuItem>
                    REGISTER
                   </MenuItem>
                   <MenuItem>
                    LOGIN
                   </MenuItem>
                   <MenuItem>
                   <LocalMallOutlinedIcon sx = {{color:"gray", fontSize:25}} />
                   </MenuItem>
               </Right>
           </Wrapper>
        </ Container>
    )
}

export default Nav
