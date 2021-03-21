import { Grow } from '@material-ui/core';
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { googleAuth } from '../../redux/Auth/authActions';

import SignIn from './SignIn';
import SignUp from './SignUp';



const initForm = {
    fullName: '',
    email: '',
    password: ''
};
  
const Auth = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [formData, setFormData] = useState(initForm);
    const history = useHistory();
    
    const handleGoogleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
          props.googleAuth({ result, token });
          history.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleError = () => {
        console.error('Google Sign In has error :( ');
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Grow in>
                {isRegistered ?
                    <SignIn setIsRegistered={setIsRegistered} handleSubmit={handleSubmit} handleChange={handleChange} handleGoogleSuccess={handleGoogleSuccess} handleGoogleError={handleGoogleError}/>
                    :
                    <SignUp setIsRegistered={setIsRegistered} handleSubmit={handleSubmit} handleChange={handleChange} />}
            </Grow>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        googleAuth: (data) => dispatch(googleAuth(data))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth);
