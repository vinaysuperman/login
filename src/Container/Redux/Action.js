// Redux action
import * as actionType from './Literals';


export const userDetail=(data)=>{  // will get the userdata on login
    return {
        type:actionType.AUTH_LOGIN,
        userName:data,
    }
} 

export const logOut=(data)=>{  // will logout user from landing page
    return {
        type:actionType.AUTH_LOGOUT,
        payLoad:data
    }
} 

export const regDetail=(data1,data2)=>{   // user registration details
    return {
        type:actionType.REG_DETAIL,
        fName:data1,
        password:data2
    }
} 