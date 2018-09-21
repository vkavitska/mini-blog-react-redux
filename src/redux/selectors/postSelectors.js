import {createSelector} from 'reselect'

/*for posts list*/
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

/*for post item*/
const PostItemSelector=(state, props)=>{
  return state.posts.entities[props.id]
}

export const ItemSelector=()=>createSelector(
  [PostItemSelector],
  (data)=>data
)











