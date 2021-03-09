import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';

import './style.css';

const Navbar = () => {
    return (
        <AppBar className='navbar-appbar' position='sticky' color='inherit'>
                <Typography component={Link} to='/'  variant='h6' align='center'>Home</Typography>
                <Toolbar >
                    <Button component={Link} to='/auth' variant='contained'>Login</Button>
                </Toolbar>
        </AppBar>
    )
}

export default Navbar
