import POSTS_API from './../../postsAPI.js'
import * as Actions from './../actions/userActions.js'

export function getUserInfoEffect(id){
  POSTS_API.getURL=`https://jsonplaceholder.typicode.com/users/${id}`;
  return dispatch => {
    dispatch(Actions.getUserInfoAction())
    POSTS_API.getInfo()
      .then(user=>{      
        dispatch(Actions.getUserInfoSuccessAction(user))
    })
  };
}
