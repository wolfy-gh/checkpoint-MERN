import {TOGGLE_FALSE,TOGGLE_TRUE} from '../constants/edit'

const intialState = {
    edit_toggle:false
}

export const editReducer = (state=intialState,{type})=>{
    switch(type){
        case TOGGLE_TRUE :
            return {...state,edit_toggle:true}
        case TOGGLE_FALSE :
            return {...state,edit_toggle:false}
        default : return state
    }
}