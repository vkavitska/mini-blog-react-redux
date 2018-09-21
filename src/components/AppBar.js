import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {withRouter, Link} from 'react-router-dom'



const styles = {
  root: {
    flexGrow: 1,
  },
};

@withRouter

class SimpleAppBar extends Component {

    render() {
        return (

            <div>
                <Link to='/'>
                    <AppBar position="fixed" color='primary'>
                        <Toolbar>
                            <Typography variant="title" color='default'>
                                Home
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Link>
            </div>
        )
    }
}


export default withStyles(styles)(SimpleAppBar);
