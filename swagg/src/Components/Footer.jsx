import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
  padding-top: 20px;    
  display: flex;
  padding-left:20px ;
  color: #363535;
  background-color: lightblue;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
font-style: italic; 
` ;
const Desc = styled.div`
margin: 20px 0px ;` 


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
`;
const Right = styled.div`
  flex: 1;
`;

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
      <Center></Center>
      <Right></Right>
    </Container>
  );
}

export default Footer;
