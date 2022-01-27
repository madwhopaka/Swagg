import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import payop from '../images/payop.png' ;
import {mobile} from '../responsive.js';


const Container = styled.div`
  padding: 50px;    
  display: flex;
  ${mobile({flexDirection:"column", padding: "0px"})}
  color: #363535; 
  /* background-color: #7f53ac;
background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%); */
`;
const Left = styled.div`
  flex: 1;
  ${mobile({padding:"10px 30px", height:"20vh"})}
 

`;
const Logo = styled.h1`
font-style: italic; 
${mobile({padding:"5px", textAlign:"center"})}
` ;
const Desc = styled.div`
margin: 20px 0px;
${mobile({margin: "5px", padding:"5px", textAlign:"center"})}
font-size: 15px ;
` 


const SocialContainer = styled.div`
display:flex;
${mobile({alignItems:"center", justifyContent:"center", marginBottom:"20px"})}`; 

const SocialIcon = styled.div`
margin-top: 35px ;
height: 40px ;
${mobile({marginTop:"10px", width: "35px", height:"35px"})}
width: 40px;
border-radius:50%; 
color:white;
background-color: #${props=> props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`


const Center = styled.div`
  flex: 1;
  ${mobile({display:"none"})}
  padding: 10px ; 
  margin-left: 30px ;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({textAlign:"center"})}
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none; 
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width:50% ; 
margin-bottom: 10px;    
;` 
 

const Right = styled.div`
  flex: 1;
  padding: 10px ;
  ${mobile({padding: "30px 20px", background:"#496379", color:"white"})} 
  align-items: center;
  justify-content: center;
   

`
const ContactItem = styled.div`
margin-bottom: 20px;
${mobile({marginBottom:"5px"})}
display: flex;
align-items:center; `

const Payment =  styled.img`
margin-top:28px ;
height: 50px; 
${mobile({marginTop:"10px"})}
width : 300px ;

`
const Title3 = styled.h3`
    margin-bottom: 30px;
    ${mobile({marginBottom:"20px", textAlign:"center", fontSize:"22px"})}
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>SWAGG.</Logo>
        <Desc>
          Swagg is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. Our
          online store brings you the latest in designer products straight out
          of fashion houses. 
        </Desc>
        <SocialContainer>
            <SocialIcon color = "385999">
                <FacebookOutlinedIcon/>
            </SocialIcon>
            <SocialIcon color = "E4405F">
               <YouTubeIcon />
            </SocialIcon>
            <SocialIcon color = "55ACEE">
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color = "E60023">
                <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>
              Useful Links
          </Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Men Fashion</ListItem>
              <ListItem>Women Fashion</ListItem>
              <ListItem>Accessorires</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms & Conditions</ListItem>
              <ListItem>Gerrany</ListItem>
          </List>
      </Center>
      <Right>
         <Title3>CONTACT</Title3>
         <ContactItem><RoomIcon style = {{marginRight:10}} /> Malad E, Mumbai</ContactItem>
         <ContactItem>
             <PhoneIcon style = {{marginRight:10}} /> +222 9329 29329
         </ContactItem>
         <ContactItem> <EmailIcon style = {{marginRight:10}} /> contact@swagg.dev</ContactItem>
         <Payment src = {payop} / >
      </Right>
    </Container>
  );
}

export default Footer;
