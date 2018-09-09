import * as type from "../../constants/ActionType";
const initialState = {
    user:[],
    userById:[]  
}
export default function user(state=initialState,action) {
    console.log(action.type)
    switch (action.type) {


        case type.SET_USER:{
            console.log(action)
            return {
                user:action.data.user,
                userById: action.data.userById
        }
        break;
        }
        default:
            return state;


    }
}