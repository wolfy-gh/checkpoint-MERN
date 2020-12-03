import {combineReducers} from "redux"
import {userReducer} from "./user"
import {editReducer} from './edit'


export const allReducers = combineReducers({
    userReducer,
    editReducer
})