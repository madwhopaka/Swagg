import React from 'react';
import styled from 'styled-components' ; 
import Search from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import  {mobile} from '../responsive.js' ; 



const Container = styled.div`
${mobile({height: "50px"})}
height: 60px; 
width : 100%; 
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
// background-color: black ; 
// color: white; 
`

const Wrapper = styled.div`
padding: 10px 20px ;
display:flex; 
justify-content : space-between;
align-items:center; 
${mobile({padding:"10px 0px" , width: "100%"})};
`


const Left = styled.div `
display:flex; 
justify-content: start ; 
align-items: center;
flex:1;`


const Language = styled.span `
font-size:14px ;
${mobile({display:"none"})};
cursor: pointer ;
`
const SearchContainer = styled.div`
display:flex; 
border: 0.5px solid slateblue; 
justify-content: center; 
padding: 5px; 
margin-left:25px; 
${mobile({marginLeft: "5px"})};
align-items: center ; 
`

const Input = styled.input`
${mobile({width:"50px;"})}
outline:none ;
border : none ;

`
const  Center= styled.div `
flex:1;
text-align:center;
display: flex; 
justify-content: center;
`

const Logo = styled.h1 `
font-weight: bold;
font-style: italic; 
${mobile({fontSize:"24px"})};

` ; 


const Right = styled.div `
display:flex ;
align-items:center;
justify-content:flex-end; 
${mobile({justifyContent:"center"})};
flex:1;`;



const MenuItem = styled.div`
font-size: 14px; 
${mobile({fontSize:"12px", marginLeft: "12px"})};
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
                      <Input placeholder='Search'></Input>
                     <Search sx = {{color:"gray", fontSize:20}} />
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
