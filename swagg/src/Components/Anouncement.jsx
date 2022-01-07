
import styled from "styled-components";

const Container = styled.div`
height:30px; 
color: white ;
width: 100%; 
align-items:center;
display:flex;
justify-content:center;
font-size:13px;
font-weight:bold;
background-color: #2C4152 ;
`

function Anouncement() {
    return (
       <Container>
    <marquee behavior="scroll" direction="left"> Get FREE shipping on ORDERS above $10  {"               "}
    </marquee>
    

       </Container>
    )
}

export default Anouncement
