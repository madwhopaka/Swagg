import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios' ; 

const URL  = "https://swagg-backend.herokuapp.com"; 

const Container = styled.div `
    display:flex; 
    justify-content: center;
    height: 100vh ; 
    align-items: center;

`
const Button  = styled.button `
    border: none ; 
    background-color: #1b1b1b;
    color: white ;
    padding : 20px 50px ;
    font-size: 20px;
    border-radius: 10px ;
    transition: 0.4s ease-in;

    &:active {
        background-color: #000000;
        transform: scale(1.15);
    }
`

const loadScript= ()=> {
    return new Promise (resolve=> {
        const script = document.createElement('script'); 
        script.src = "https://checkout.razorpay.com/v1/checkout.js"; 
        document.body.appendChild(script) ; 
        script.onload = ()=> {
            resolve(true)  ; 
        }
        script.onerror = ()=> {
            resolve(false)  ;
        }
    })  
}



function Pay() {
    const nav = useNavigate() ; 
    const displayRazorPay = async (amount)=> {

        const res = await loadScript() ; 
        console.log(res)  ;
        if (!res)  {
            console.log("This is it"); 
            alert("You are offline");
        }  

        const data = await axios.post(`${URL}/api/checkout/order`) ;
        console.log(data); 
        const am = data.data.amount ;

        const options = {
              id : data.data.id , 
              key: "rzp_test_ru5aXnF85lb0mo",
              amount : data.data.amount , 
              image: "http://dslv9ilpbe7p1.cloudfront.net/anefDVIpM4le32yduNYT2A_store_banner_image.jpeg",
              name: "Swagg online " , 
              description : "swagg online fashion store", 
              currency: "INR" , 
              handler : async function  (response) {
                  
                  const paymentId = response.razorpay_payment_id;
                  console.log(paymentId) ; 
                  const url = `${URL}/api/checkout/capture/${paymentId}`;
                  const captureResponse = await axios.post(url, {amount:am, currency:"INR"})
                  const successObj = JSON.parse(captureResponse.data)
                  const captured = successObj.captured;
                  if (captured) {
                      alert("payment successful"); 
                      nav('/sucess', {replace:true}); 
                  }
                  
              } , 

              prefill : {
                  name: "Swagg Men & Women Fashion"        }

        };

        const paymentObject = new window.Razorpay(options) ; 
        paymentObject.open() ; 
    }
    

    return (
        <Container>
                <Button onClick={displayRazorPay}>
                    Pay
                </Button>
        </Container>
    )
}

export default Pay
