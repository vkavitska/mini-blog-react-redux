import POSTS_API from './../../postsAPI.js'
import * as Actions from './../actions/commentsActions.js'

export function getCommentsEffect(id){
  POSTS_API.getURL=`https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  return dispatch => {
    dispatch(Actions.getCommentsAction())
    POSTS_API.getInfo()
      .then(comments=>{      
        dispatch(Actions.getCommentsSuccessAction(comments))
    })
  };
}