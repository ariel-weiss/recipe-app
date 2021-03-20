import { Grow } from '@material-ui/core';
import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
    let isRegistered = true;

    return (
        <div>
            <Grow in>
            {isRegistered ? <SignIn /> : <SignUp/>}
            </Grow>
        </div>
    )
}

export default Auth
