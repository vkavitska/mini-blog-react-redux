export default commentsReducer
import {GET_COMMENTS, GET_COMMENTS_SUCCESS} from './../actions/commentsActions.js'

let initialState={
  comments:[],
  loading:false
}

function commentsReducer(state=initialState, action){
  switch(action.type){
    case GET_COMMENTS:{
      return{
        ...state,
        loading:true
      }
    }
    case GET_COMMENTS_SUCCESS:{

      const comments=action.payload;
    
      return{
        ...state,
        comments,
        loading:false
      }
    }  
  }
  return state;
}