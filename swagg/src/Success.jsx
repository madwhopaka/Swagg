import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios' ; 
import { useLocation } from "react-router-dom";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJmNjIzNDI3Njk2MjBkMjlkY2Q4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDIyMDIxMSwiZXhwIjoxNjQ0NDc5NDExfQ.pxtAm7KE8sMOB7oMYduyscCiDwWjNXkaDSyFKvk2ong" ; 

const URL  = "https://swagg-backend.herokuapp.com"; 
const Success = () => {
  const location = useLocation();
  console.log(location.state); 
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.address;
  const cart = location.state.cart;
//   const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post(`${URL}/api/orders/`,  {
          userId: "OIddlskowe", 
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data, 
        },{headers:{token: `Bearer ${TOKEN}`}});
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;