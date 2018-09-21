import React, { Component } from 'react';
import { render } from 'react-dom';
import PostsListPage from './components/PostsListPage.js';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import PostInfoPage from './components/PostInfoPage.js'
import store from './redux/store.js'
import AppBar from './components/AppBar.js'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        <Route exact path="/" component={PostsListPage} />
        <Route path="/post/:id" render={(props) => <PostInfoPage {...props} />} />   
      </div>
    );
  }
}

render(
      <BrowserRouter>
        <Provider store={store}> 
          <App/>
        </Provider>
      </BrowserRouter>, 
      document.getElementById('root')
);

//  <Route path="/post/:id" component={PostInfoPage} />
