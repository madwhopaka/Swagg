import axios from 'axios' ; 

const BASE_URL  =  "https://swagg-backend.herokuapp.com/api" ; 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJmNjIzNDI3Njk2MjBkMjlkY2Q4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDIyMDIxMSwiZXhwIjoxNjQ0NDc5NDExfQ.pxtAm7KE8sMOB7oMYduyscCiDwWjNXkaDSyFKvk2ong" ; 



export const publicRequest = axios.create({
  baseURL: BASE_URL ,
})

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header : {token: `Bearer ${TOKEN}`}
})