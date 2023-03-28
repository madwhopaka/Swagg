import styled from 'styled-components';
import { useState, useEffect } from 'react';
import registerbg from '../images/registerbbg.jpg'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '../images/logoicon.png';
import { mobile } from '../responsive.js';
import bgmob from '../images/bgmob.jpg'
import { useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import Loading from '../Components/Loading';
import { CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';



function Login() {
    const location = useLocation();



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.user.error);
    const dispatch = useDispatch();
    const dataFetching = useSelector(state => state.user.isFetching);
    const handleLogin = async (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }
    const [errmsg, setErrorMsg] = useState('');
    useEffect(() => {
        // Define the 'otpless' function
        window.otpless = (otplessUser) => {
            const waName = otplessUser.waName;
            const waNumber = otplessUser.waNumber;
            login(dispatch, { username: waName, password: waNumber });

            // Handle the signup/signin process
            // ...
        };
    }, []);
    useEffect(() => {
        error && setErrorMsg("Invalid/Null credentials. If correct Try Again ");
        setTimeout(() => {
            setErrorMsg('');
        }, 3000)
    }, [error])

    return (
        <Container>
            <WrapperContainer>
                <Logo><Icon src={icon} />SWAGG.</Logo>
                <Title>Login</Title>
                <InputWrapper>
                    <Label> <p>Email</p></Label>
                    <InputContainer>
                        <Input style={{ width: "100%" }} placeholder='johndoe@yahoo.in' onChange={(e) => setUsername(e.target.value)} />
                    </InputContainer >
                    <Label> <p>Password</p></Label>
                    <InputContainer>
                        <Input style={{ width: "100%" }} placeholder='Enter your password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    </InputContainer >
                    <Forgot>
                        <ForgotText href='#'>Forgot Password ? </ForgotText>
                    </Forgot>
                </InputWrapper>

                <Button onClick={handleLogin}>
                    LOGIN
                </Button>
                {dataFetching ? <CircularProgress /> : <></>}
                {error && <Error>
                    {errmsg}
                </Error>}
                <AlreadyHave> <AlreadyHaveText>Don't have an account ?  <Link style={{ color: " #1b385e" }} to='/register'>Signup</Link></AlreadyHaveText></AlreadyHave>
            </WrapperContainer>
        </Container>
    )
}

export default Login;


const Error = styled.span`
color:red ; 
text-align: center; 
margin-bottom:10px;`


const Container = styled.div`
width: 100%; 
position: relative; 
background-color: white ;
background: url(${registerbg}) ; 
background-size: cover;
${mobile({ background: `url(${bgmob})`, backgroundSize: "cover" })}
display:flex; 
flex-direction: column; 
justify-content: center;
align-items: center;
height: 100vh;`  ;

const Logo = styled.h1`
    font-size: 30px;
    position: absolute;
    ${mobile({ fontSize: "30px", position: "relative", margin: "0px 10px 40px 10px", alignItems: "flex-end", justifyContent: "end" })}
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

const WrapperContainer = styled.form`
background-color: #ffffff;
width: 350px ;
/* border-radius: 10px; */
${mobile({ width: "70vw", borderRadius: "20px" })}
box-shadow: 6px 6px 26px -6px rgba(0, 0, 0, 0.75);
display:flex; 
padding: 70px 25px 50px 25px ;
flex-direction: column; 
justify-content: center;
align-items: center;
`

const Title = styled.h2`
    color : #2C4152;    
    text-align: center;
`

const InputWrapper = styled.div`
justify-content: start;
${mobile({ width: "65vw", margin: "10px" })}
width: 100%; 
align-items:center;`

const InputContainer = styled.div`
    display:flex ;
    width: 100% ;
    ${mobile({ width: "100%", alignItems: "center" })}
    justify-content: start ; 
    margin-bottom: 10px; 
`
const Label = styled.div`
margin-left: 10px;
font-weight: 400;
color:  #2C4152;
width: 100% ;
`
const Input = styled.input`
padding: 10px ;
margin:10px ;
${mobile({ width: "50%", margin: "5px" })}
width: 100%; 
font-size: 15px;
border: 2px solid grey ;
outline: none ; 
`
const Image = styled.img`
    width: 30%; 
`


const Button = styled.button`
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
const AlreadyHaveText = styled.p`
    
`
const Forgot = styled.div`
`
const ForgotText = styled.a`
    font-size: 14px ;
    margin-left: 20px;
    color: #1b385e;
`