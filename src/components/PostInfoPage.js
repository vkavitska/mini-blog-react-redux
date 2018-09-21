import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {PostInfoSelector, PostUserInfoSelector, CommentsSelector} from './../redux/selectors/postSelectors.js';
import {getCommentsEffect} from './../redux/effects/commentsEffects.js';
import {getUserInfoEffect} from './../redux/effects/userEffects.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

@withRouter

@connect((state, props)=>{

  return{
    postId:props.match.params.id,
    commentsData:state.comments,
    user:state,
    userData:state.userInfo
  }
})

class PostInfoPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCommentsEffect(this.props.postId));
        const userId = this.props.user.posts.entities[this.props.postId].userId;
        this.props.dispatch(getUserInfoEffect(userId));
    }

    render() {
        const postTitle = this.props.user.posts.entities[this.props.postId].title;

        const bull = <span styles={{
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)'
        }}>
                      •
              </span>

        return (
            <div style={{marginTop: '70px'}}>
                <Card
                    style={{
                        maxWidth: 700,
                        margin: 'auto',
                    }}
                >
                    <CardContent>
                        <Typography color="textSecondary">
                            {postTitle}
                        </Typography>
                        <Typography variant="headline" component="h2">
                            {this.props.userData.userInfo.username}
                            {bull}
                            {this.props.userData.userInfo.name}
                            {bull}
                            {this.props.userData.userInfo.email}
                        </Typography>
                        {
                            this.props.commentsData.comments.map(post => {
                                return (
                                    <Typography component="p" style={{marginTop: '30px'}} key={"id" + post.id}>
                                        {post.name.toUpperCase()}
                                        <br/>
                                        {post.body}
                                    </Typography>
                                )
                            })
                        }
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default PostInfoPage

