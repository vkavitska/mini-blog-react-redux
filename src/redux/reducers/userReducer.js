export default userReducer
import {GET_USER_INFO, GET_USER_INFO_SUCCESS} from './../actions/userActions.js'

let initialState={
  userInfo:{},
  loading:false
}

function userReducer(state=initialState, action){
  switch(action.type){
    case GET_USER_INFO:{
      return{
        ...state,
        loading:true
      }
    }
    case GET_USER_INFO_SUCCESS:{

      const userInfo=action.payload;

      return{
        ...state,
        userInfo,
        loading:false
      }
    }  
  }
  return state;
}