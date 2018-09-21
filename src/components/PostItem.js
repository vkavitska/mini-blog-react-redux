import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ItemSelector} from './../redux/selectors/postSelectors.js';
import PostInfoPage from './PostInfoPage.js';


@withRouter

@connect((state, props)=>{
  const PostItemSelector = ItemSelector();
  const mapStateToProps = (state, props) => {
    return{
      data: PostItemSelector(state, props)
      }
  };
 return mapStateToProps
})

class PostItem extends Component {

    constructor(props) {
        super(props);
        this.openPostHandler = this.openPost.bind(this);
    }

    openPost() {
        this.props.history.push("/post/" + this.props.data.id);
        return (<PostInfoPage userId={this.props.data.userId}/>
        )
    }

    render() {

        let title = this.props.data.title.toUpperCase();
        let body = this.props.data.body[0].toUpperCase() + this.props.data.body.substring(1);

        return (
            <div style={{marginTop: '70px'}}>
                <Card
                    style={{
                        maxWidth: 700,
                        margin: 'auto'
                    }}
                >

                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="p">
                            {body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={this.openPostHandler}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

            </div>
        )
    }
}

export default PostItem

    //  <PostInfoPage userId={this.props.data.userId}/>






        
