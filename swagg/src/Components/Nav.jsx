import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Badge from '@mui/material/Badge' ; 
import { mobile } from "../responsive.js";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import { useSelector } from "react-redux";




function Nav() {
  const cart  = useSelector(state=>state.cart) ; 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search sx={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SWAGG.</Logo>
        </Center>
        <Right>
          <Linkss>
          <At style = {{textDecoration:"none"}} href="/register">
            <MenuItem>REGISTER</MenuItem>
            {/* <Slash>/</Slash> */}
          </At>
          <Hr />
          <At href="/login" style = {{textDecoration:"none"}}>
            <MenuItem>LOGIN</MenuItem>
          </At>
          </Linkss>
          <MenuItem>
         <Link style= {{color:"black"}} to= '/cart'>
         <Badge badgeContent={cart.quantity} color="warning">
          <LocalMallOutlinedIcon sx={{ color: "gray", fontSize: 25 }} />
          </Badge></Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Nav;






const Container = styled.div`
  ${mobile({ height: "50px" })}
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  // background-color: black ;
  // color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px", width: "100%" })};
`;

const Left = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  ${mobile({ display: "none" })};
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid slateblue;
  justify-content: center;
  padding: 5px;
  margin-left: 25px;
  ${mobile({ marginLeft: "5px" })};
  align-items: center;
`;

const Input = styled.input`
  ${mobile({ width: "50px;" })}
  outline:none;
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-style: italic;
  ${mobile({ fontSize: "20px", marginLeft:"-30px"})};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", marginLeft: "-30px"  })};
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  text-decoration: none;
  ${mobile({ fontSize: "12px", marginLeft: "10px", textAlign:"left" })};
  display: flex;
  margin-left: 25px;
  cursor: pointer;
`;

const At = styled.a `

    text-decoration:none ; 
    ${mobile({textDecoration:"underlined", color: "grey", display:"flex", justifyContent:"center", alignItems:"center"})}
    color: black ;
    &:active {
        text-decoration:none ;
    }
`
const Linkss = styled.div `
display:flex; 
  ${mobile({display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"})}
`
const Slash = styled.span `
display:none;
  ${mobile({display:'flex', marginLeft:"5px", display:"none"})}
`
const Hr = styled.hr `
 display:none ;
 ${mobile({display:'flex', width:"100%", height: "0.5px", textAlign:"center",marginLeft:"5px", backgroundColor:'black', border:'none'})}
`
