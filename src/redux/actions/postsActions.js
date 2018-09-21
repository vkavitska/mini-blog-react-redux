export const GET_POSTS='GET_POSTS';
export const GET_POSTS_SUCCESS='GET_POSTS_SUCCESS';

export function getPostsAction(){
  return{
    type: GET_POSTS
  }
}

export function getPostsSuccessAction(payload){
  return{
    type:GET_POSTS_SUCCESS,
    payload
  }
}

