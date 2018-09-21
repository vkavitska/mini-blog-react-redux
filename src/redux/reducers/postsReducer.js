export default postsReducer
import {GET_POSTS, GET_POSTS_SUCCESS} from './../actions/postsActions.js'

let initialState={
  ids:[],
  entities:{},
  loading:false
}

function postsReducer(state=initialState, action){
  switch(action.type){
    case GET_POSTS:{
      return{
        ...state,
        loading:true
      }
    }
    case GET_POSTS_SUCCESS:{

      const postsArr=action.payload;
      const entities=postsArr.reduce((accumulator, post)=>{
        return{
          ...accumulator,
          [post.id]:post
        }   
      },{})
      const ids=Object.getOwnPropertyNames(entities); 
      
      return{
        ...state,
        ids,
        entities,
        loading:false
      }
    }  
  }
  return state;
}