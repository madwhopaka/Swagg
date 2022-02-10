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