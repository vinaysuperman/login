// Redux reducer

import * as actionType from './Literals';

const initialState = {
    name: "",
    auth: false,
    fname:"",
    lname:"",
    email:"",
    password:""

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_LOGIN:  // will user login auth
            return {
                ...state,
                auth: true,
                name: action.userName,
            }
        case actionType.AUTH_LOGOUT:  // will check user log out
            return {
                ...state,
                auth: false,
            }
        case actionType.REG_DETAIL:   // will check user registeration details
            return {
                ...state,
                fname:action.fName,
                password:action.password
                
            }
        default:
            return state
    }

}