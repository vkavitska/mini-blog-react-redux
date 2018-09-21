import POSTS_API from './../../postsAPI.js'
import * as Actions from './../actions/postsActions.js'

export function getPostsEffect() {
  POSTS_API.getURL='https://jsonplaceholder.typicode.com/posts';
  return dispatch => {
    dispatch(Actions.getPostsAction())
    POSTS_API.getInfo()
      .then(posts=>{      
        dispatch(Actions.getPostsSuccessAction(posts))
    })
  };
}
