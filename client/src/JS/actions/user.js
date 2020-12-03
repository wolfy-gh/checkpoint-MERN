import {
    GET_USER_LOAD, GET_USER_SUCCESS, GET_USER_FAIL,
    DELETE_USER,
    ADD_USER,
    GET_USER_ID,GET_USER_ID_FAIL,
    UPDATE_USER
} from "../constants/user"
import axios from "axios"

// get all users
export const getallUsers=()=>async(dispatch)=> {
    dispatch({
        type: GET_USER_LOAD
    })
    try {
        const result = await axios.get("/api/user")
        dispatch({
            type: GET_USER_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload: error
        })
    }
}

//get a user by id 
export const get_user_id = (id)=> async(dispatch)=> {
    try {
        const result = await axios.get(`/api/user/${id}`)
        dispatch({
            type:GET_USER_ID,
            payload:result.data.response
        })
    } catch (error) {
        dispatch({
            type:GET_USER_ID_FAIL,
            payload:error
        })
        
    }
}

//delete a user by id 
export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/user/${id}`)
        dispatch(getallUsers())
    } catch (error) {
        dispatch({
            type: DELETE_USER,
            payload: error
        })
    }
}

// add a new user
export const add_user =(new_user)=>async(dispatch)=>{
    try {
        await axios.post("/api/user",new_user)
        dispatch(getallUsers())
    } catch (error) {
        dispatch({
            type:ADD_USER,
            payload:error
        })
    }
}

//update a user by id 
export const update_user=(id,user)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/${id}`,user)
        dispatch(getallUsers())
    } catch (error) {
        dispatch({
            type:UPDATE_USER,
            payload:error
        })
    }
}