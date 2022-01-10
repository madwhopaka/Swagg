import React from 'react'
import styled from 'styled-components' ; 
import send from '../images/send.png'; 
import newsletter from '../images/newsletter.jpg' ; 



const Container = styled.div`
height: 60vh; 
width: 100%; 
display: flex;    
flex-direction: column;
color:white;
-webkit-backdrop-filter: blur(5px);
background-color: #a7adc9;
background-image: url(${newsletter}) ;
background-repeat: no-repeat;
background-size: cover;
backdrop-filter: blur(10px);
align-items: center;
justify-content: center;
`


const Title= styled.h1`
font-size:70px;
color: white;
`

const Description = styled.div`
font-weight: 300;
font-size: 24px;
margin-bottom: 50px;
color: white;
`
const InputContainer = styled.div`
height: 40px;
width: 50%;     
display:flex ;
justify-content: space-between;
background-color: white;
padding: 5px; 
padding-left: 10px ;
border-radius: 5px ;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);   
align-items: center;
text-align:center;

`

const Input = styled.input`
flex: 8 ;
border:none; 
width: 200px ;
margin-right: 10px;
outline: none ;
font-size: 18px; 
text-align: center;

`


const Image = styled.img `
height: 35px ;
width: 35px ;   `  


const Button = styled.button`
flex:0.1 ;
background-color: transparent;  
box-shadow : 1px 1px 22px rgba(157, 184, 209, 0.19);
display:flex ;
justify-content: center;
align-items: center;
margin-right: 15px;     
padding: 0px ;
outline:none ;
border:none ;
border-radius: 50%; 
transition: 0.5s ease-in ;

&:hover {
    transform: scale(1.2) ;
}

&:active {
    background-color: slateblue;
    transform: translate(20px,-25px) ;
}
`


function Newsletter() {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>
                Subsribe to our newsletter to recieve timely updates of the latest fashion trends, discounts and amazing offers !
            </Description>
            <InputContainer>
            <Input placeholder = "Email">
            </Input>
            <Button>
            <Image src = {send} />
            </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
