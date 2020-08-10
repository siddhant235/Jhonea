import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility'

const initialState={
    data:[],
loading:false,
message:'',
favstatus:false,
error:''
}
const addfavoutite=(state,action)=>{
    return updateObject(state,{loading:true})
}
const removefavoutite=(state,action)=>{
    return updateObject(state,{loading:true})
}
const getfavoutite=(state,action)=>{
    return updateObject(state,{loading:false,data:action.data,favstatus:action.favstatus})
}
const favourite=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.ADD_FAVOURITE:return addfavoutite(state,action);
        case actionTypes.REMOVE_FAVOURITE:return removefavoutite(state,action)
        case actionTypes.GET_FAVOURITE:return getfavoutite(state,action)
        default: return state
    }
}
export default favourite;