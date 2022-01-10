import styled from 'styled-components' ; 
import registerbg from '../images/registerbbg.jpg'
import icon from '../images/logoicon.png' ; 

const Container = styled.div `
width: 100%; 
position: relative; 
background-color: white ;
background: url(${registerbg}) ; 
background-size: cover;
display:flex; 

flex-direction: column; 
justify-content: center;
align-items: center;
height: 100vh;`  ;

const Logo = styled.h1 `
    font-size: 30px;
    position: absolute;
    top:0 ; 
    left: 0 ; 
    margin: 30px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-style: italic;
    color: black;
    
`
const Icon = styled.img`
height: 40px;
width: 40px;
margin-right : 5px ;
` ; 

const WrapperContainer = styled.form `
background-color: #ffffff;
display:flex; 
padding: 60px 5px 30px 5px ;
flex-direction: column; 
justify-content: center;
align-items: center;

`

const Title  = styled.h2`
    color : #2C4152;    
    text-align: center;
`

const InputWrapper = styled.div `
justify-content: start;
align-items:center;` 

const InputContainer = styled.div `
    display:flex ;
    width: 100% ;
    justify-content: start ; 
    margin-bottom: 10px; 
`
const Label = styled.div `
margin-left: 10px;
font-weight: 400;
color:  #2C4152;
width: 100% ;
` 
const Input= styled.input `
padding: 10px ;
margin:10px ;
font-size: 15px;
border: 2px solid grey ;
outline: none ; 
`
const Image = styled.img `
    width: 30%; 
` 

const Agreement = styled.div `
 padding: 10px ;
 width: 90%; 
 text-align: center;
` ; 

const AgreementText = styled.p `
font-weight: 400 ; 
color: #424242 ;
font-size: 15px ;` ;

const Button  = styled.button `
outline: none ;
margin:10px;
color: white; 
font-size: 15px;
font-weight: 600;
background-color: #5771bc;
padding: 10px 25px ;
border: none  ;
&:hover {
    background-color: teal;
}
` ; 

function Register() {
    return (
       <Container>
         <WrapperContainer>
             <Logo><Icon src= {icon} />SWAGG.</Logo>
             <Title>Create a new account</Title>
             <InputWrapper>
             <Label> <p>Name</p></Label>
             <InputContainer>
             <Input placeholder='John' />
             <Input placeholder='Doe' />
             </InputContainer >
             <Label> <p>Email</p></Label>
             <InputContainer>
             <Input style = {{width: "100%"}}placeholder='johndoe@yahoo.in' />
             </InputContainer >
             <Label> <p>Password</p></Label>
             <InputContainer>
             <Input style = {{width: "100%"}}placeholder='Create a password' />
             </InputContainer >
             <Label> <p>Confirm Password</p></Label>
             <InputContainer>
             <Input style = {{width: "100%"}}placeholder='Both password fields should match.' />
             </InputContainer ></InputWrapper>
             <Agreement>
                <AgreementText>
                    By creating an account, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b>
                </AgreementText>
             </Agreement>
             <Button>
                 REGISTER
             </Button>
         </WrapperContainer>
       </Container>
    )
}

export default Register
