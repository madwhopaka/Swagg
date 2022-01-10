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
width: 350px ;
/* border-radius: 10px; */
box-shadow: 6px 6px 26px -6px rgba(0, 0, 0, 0.75);
display:flex; 
padding: 70px 25px 50px 25px ;
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
width: 100%; 
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
width: 100%; 
font-size: 15px;
border: 2px solid grey ;
outline: none ; 
`
const Image = styled.img `
    width: 30%; 
` 


const Button  = styled.button `
outline: none ;
margin:20px 0px;
color: white; 
font-size: 15px;
border: 2px solid blueviolet ; 
font-weight: 600;
background-color: #3a3a3a;
padding: 10px 45px ;
border: none  ;
&:hover {
    background-color: #1b385e;
}
&:active {
    
}
` 

; 


const AlreadyHave = styled.div`
    
`
const AlreadyHaveText = styled.p `
    
`
const  Forgot  = styled.div `
`
const ForgotText = styled.a `
    font-size: 14px ;
    margin-left: 20px;
    color: #1b385e;
`

function Register() {
    return (
       <Container>
         <WrapperContainer>
             <Logo><Icon src= {icon} />SWAGG.</Logo>
             <Title>Login</Title>
             <InputWrapper>
             <Label> <p>Email</p></Label>
             <InputContainer>
             <Input style = {{width: "100%"}}placeholder='johndoe@yahoo.in' />
             </InputContainer >
             <Label> <p>Password</p></Label>
             <InputContainer>
             <Input style = {{width: "100%"}}placeholder='Enter your password' />
             </InputContainer >
             <Forgot>
                <ForgotText href='#'>Forgot Password ? </ForgotText>
             </Forgot>
            </InputWrapper>
             <Button>
                 LOGIN
             </Button>
             <AlreadyHave> <AlreadyHaveText>Already have an account ?  <a style= {{color: " #1b385e"}}href='#'>Login</a></AlreadyHaveText></AlreadyHave>
         </WrapperContainer>
       </Container>
    )
}

export default Register
