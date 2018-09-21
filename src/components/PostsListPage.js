import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostsEffect} from './../redux/effects/postsEffects.js';
import PostItem from './PostItem.js';
import LoadingItem from './LoadingItem.js';
import {PostsSelector, LoadingSelector} from './../redux/selectors/postSelectors.js';
import TextField from '@material-ui/core/TextField';


@connect(state=>{
  return{
  postsData:PostsSelector(state),
  postsLoading:LoadingSelector(state)
  }
})

class PostsListPage extends Component {

    componentDidMount() {
        if (this.props.postsData.length === 0) {
            this.props.dispatch(getPostsEffect());
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.onchangeHandler = this.onchange.bind(this);
    }

    onchange(e) {
        this.setState({
            search: e.target.value
        });
    }

    render() {
        const {search} = this.state;

        const filteredPosts = this.props.postsData.filter(post => {
            return (post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (post.body.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        });

        return (
            <div style={{marginTop: '70px'}}>
                <LoadingItem data={this.props.postsLoading}/>
                <TextField
                    id="filled-full-width"
                    style={{margin: 8}}
                    placeholder="You can search post by title or post body"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    onChange={this.onchangeHandler}
                />
                <h2>
                    {
                        filteredPosts.map(post => {
                            return (
                                <PostItem
                                    key={"id" + post.id}
                                    id={post.id}
                                    userId={post.userId}
                                />
                            )
                        })
                    }
                </h2>
            </div>
        )
    }
}

export default PostsListPage