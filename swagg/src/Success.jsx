import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    display:flex; 
    justify-content: center;
    height: 100vh ; 
    align-items: center;

`
const Suc  = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #d15555;
    width : 30vw ;
    height : 40vh ;
    text-align: center;
    padding : 20px 10px ;
`
function Success() {
    return (
        <Container>
                <Suc>
                    Payment is sucessful. 
                </Suc>
        </Container>
    )
}

export default Success ;
