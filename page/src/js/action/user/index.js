import * as type from "../../constants/ActionType"
export function setUser(data) {
    return {
        type:type.SET_USER,
        data:data
    }
}