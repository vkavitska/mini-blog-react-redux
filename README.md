# mini-blog-react-redux

#### This is a test project that uses:
* React 16;
* Redux;
* React Router 4;
* Webpack.

#### This project get 100 posts using API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
When page is loaded you can see posts name and posts body. When you clicked on the button 'Learn more' you can see detailed information - comments and user information.

In postsAPI.js we fetch this posts information by using fetch Api - method fetch() to the URL:
```
getURL:'https://jsonplaceholder.typicode.com/posts'
```
In response to this request, we receive an array of the following type:
```
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
  ...
  ]
```
When we need to get comments information we fetch information from the URL (id-post id):
```
https://jsonplaceholder.typicode.com/posts/${id}/comments
```
When we need to get user information we fetch information from the URL (id- user id):
```
https://jsonplaceholder.typicode.com//users/${id}
```

We store this information using Redux.
We store posts information in object entities:{} and array ids:[]. Storing information in the object entities:{} allows to quickly get the information on the key, which is a post ID:
```
entities:{
0: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipitsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}
1: {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"}
2: {userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis emolestiae porro eius odio et labore et velit aut"}
3: {userId: 1, id: 4, title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"}
4: {userId: 1, id: 5, title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"}
...
}
```
 #### We use predictable state container that emits state updates in response to actions - Redux. 
 With using Redux the state of application is stored in an object tree within a single store.
 Actions are the source of information for the store. We have two types for actions: 'GET' and'GET_SUCCESS'.
 We have actions for getting posts, comments and user information. For example:
 ```
/redux/effects/commentsActions.js 
 
 
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
```
 We use [effects](https://github.com/redux-effects/redux-effects) to dispatch actions. For example:
```
/redux/effects/commentsEffects.js
 

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
 ```
 
Reducers specify how the application's state changes in response to actions sent to the store. So we have reducers for posts, comments, users. For example:
```
/redux/reducers/commentsReducer.js


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



  
```
We use [reselect](https://www.npmjs.com/package/reselect) - a library for creating memoized selectors. We define selectors as functions that extract fragments of the Redux state for our React components. Using memoization, we can prevent unnecessary redrawing and recalculation of the received data, which, in turn, will speed up our application.
In Redux:
```
/redux/selectors/postSelectors.js

import {createSelector} from 'reselect'

const PostsDataSelector=(state)=> {
  return state.posts.ids.map(id=>
    state.posts.entities[id]
  )
}
const PostsLoadingSelector=(state)=>{
  return state.posts.loading
}
export const PostsSelector=createSelector(
  [PostsDataSelector],
  (postsData) => postsData
)
export const LoadingSelector=createSelector(
  [PostsLoadingSelector],
  (postsLoading) => postsLoading
)
```
In React component - PostsListPage.js:
```
import {PostsSelector, LoadingSelector} from './../redux/selectors/postSelectors.js';

@connect(state=>{
  return{
  postsData:PostsSelector(state),
  postsLoading:LoadingSelector(state)
  }
})
```
#### In React we have components - AppBar, LoadingItem, PostInfoPage, PostItem, PostsListPage.
PostsListPage - is a smart component to getting videos data;
PostItem - to show posts data in UI. When we click on the button 'Learn more' with a description of the post - we go to the viewing of this post detailed information (component PostInfoPage).

#### We use [Material-UI](https://material-ui.com/) to implement some Google's Material Design to this project.
#### Webpack is used as a bundler system. 
