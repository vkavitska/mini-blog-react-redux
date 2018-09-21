export const GET_COMMENTS='GET_COMMENTS';
export const GET_COMMENTS_SUCCESS='GET_COMMENTS_SUCCESS';

export function getCommentsAction(){
  return{
    type: GET_COMMENTS
  }
}

export function getCommentsSuccessAction(payload){
  return{
    type:GET_COMMENTS_SUCCESS,
    payload
  }
}
