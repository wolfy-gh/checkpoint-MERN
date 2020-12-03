import {
    GET_USER_LOAD, GET_USER_SUCCESS, GET_USER_FAIL,
    DELETE_USER,
    ADD_USER,
    GET_USER_ID,GET_USER_ID_FAIL,
    UPDATE_USER
} from "../constants/user"

const initialState = {
    users: [],
    loadUser: false,
    error: null,
    user:{}
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_LOAD:
            return {...state,loadUser:true}
        case GET_USER_SUCCESS:
            return {...state,loadUser:false,users:payload}
        case GET_USER_FAIL,DELETE_USER,ADD_USER,GET_USER_ID_FAIL,UPDATE_USER:
            return {...state,loadUser:false,error:payload}
        case GET_USER_ID :
            return {...state,user:payload}
        default : return state
    }
}