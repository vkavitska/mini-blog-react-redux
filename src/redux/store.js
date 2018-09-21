import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer.js';
import commentsReducer from './reducers/commentsReducer.js';
import userReducer from './reducers/userReducer.js';


let rootReducer = combineReducers({
  posts: postsReducer,
  comments:commentsReducer,
  userInfo:userReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);

export default store
