import React from 'react';
import {SignIn, SignUp} from '../../components/form/Form';
import './sign-in.css'

const SignInPage = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInPage;