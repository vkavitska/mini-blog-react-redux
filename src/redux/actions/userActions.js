export const GET_USER_INFO='GET_USER_INFO';
export const GET_USER_INFO_SUCCESS='GET_USER_INFO_SUCCESS';

export function getUserInfoAction(){
  return{
    type: GET_USER_INFO
  }
}

export function getUserInfoSuccessAction(payload){
  return{
    type:GET_USER_INFO_SUCCESS,
    payload
  }
}