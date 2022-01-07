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
const Container = styled.div`
  padding-top: 20px;    
  display: flex;
  padding-left:20px ;
  color: #363535; 
  /* background-color: #7f53ac;
background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%); */
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
font-style: italic; 
` ;
const Desc = styled.div`
margin: 20px 0px;
font-size: 15px ;
` 


const SocialContainer = styled.div`
display:flex;`; 

const SocialIcon = styled.div`
height: 40px ;
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
  padding: 10px ; 
  margin-left: 30px ;
`;

const Title = styled.h3`
    margin-bottom: 30px;
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
  align-items: center;
  justify-content: center;
  text-align:"center" ; 

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items:center; `

const Payment =  styled.img`
height: 50px; 
width : 300px ;

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
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
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
         <Title>Contact</Title>
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
