import { loginFailure,loginStart, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../requestMethods";

export const login =  async (dispatch, user)=> {
    dispatch(loginStart()) ; 
    try {
        
        const payload = {
            email : user.username, 
            password: user.password
        }
        const res = await publicRequest.post('/auth/login', payload) ; 
        dispatch(loginSuccess(res.data)); 
    }
    catch(err) {
        console.log(err) ; 
        dispatch(loginFailure());
    }
}

export const register  = async (userD) => {
    try {
        const res = await publicRequest.post('/auth/register', userD); 
        console.log(res)  ;
        return res;
    }
    catch(err) {
        console.log(err) ; 
    }
}