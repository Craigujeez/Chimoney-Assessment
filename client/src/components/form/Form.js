import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {signInWithGoogle} from '../../firebase/firebase.utils';
import {SignInUser,SignUpUser} from "../../reducers/auth";
import '../../styles/forms.css'

export const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="signin group">
            <div className="input">
                <input 
                    name={otherProps.name}
                    type={otherProps.type}
                    value={otherProps.value}
                    className='form-input' 
                    onChange={(e)=>handleChange(e.target)}
                    required={otherProps.required}
                    autoComplete="new-password"
                />
                <label for={otherProps.name} className={`${otherProps.value.length ? 'shrink' : '' }`}>
                    {label}
                </label>

            </div>
        </div>
    )
}

export const Button = ({title,isGoogleSignIn,inverted , ...otherProps}) => {
    return (
        <button 
        {...otherProps}
        className={`${ inverted ? 'inverted' : ''} custom-button ${ isGoogleSignIn ? "google-sign-in" : "" } `} 
        >
            {title}
        </button>
    )
}

export const SignIn = () => {
    const data = {
        email: "",
        password: ""
    }
    const [signInForm, setsignInForm] = useState(data);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e;
        setsignInForm({...signInForm, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SignInUser(signInForm)(dispatch);
    }

    // const state = useSelector(state => state);
    

    return ( 
        <div className='sign-in'>
            <h2> I already have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={(e) => handleSubmit(e)}>
                <FormInput
                     name='email' 
                     type='email' 
                     handleChange={handleChange}
                     label='Email'
                     value={signInForm.email}
                     autoComplete="new-password"
                     required 
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={handleChange} 
                    label='Password'
                    value={signInForm.password} 
                    autoComplete="new-password"
                    required
                />

                <div className='buttons'>
                    <Button type='submit' title='Sign In'/>

                    <Button type="button" onClick={()=> signInWithGoogle()} isGoogleSignIn title='Sign In With Google'/>

                </div>
            </form>
        </div>
     );
}

export const SignUp = () => {
    const data = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [signUpForm, setsignUpForm] = useState(data);

    const dispatch = useDispatch();
 
    const handleChange = (e) => {
        const {name, value} = e;
        setsignUpForm({...signUpForm, [name]: value});
    }
 
    const handleSubmit = async (e) => {
         e.preventDefault();

         const {password,confirmPassword} = signUpForm;

         if(password !== confirmPassword){
             alert("passwords don't match");
             return;
         }

         SignUpUser(signUpForm)(dispatch);
    }
     return ( 
         <div className="sign-up">
             <h2 className="title"> I do not have an account</h2>
             <span>Sign up with your email and password</span>
             <form className="sign-up-form" onSubmit={(e)=>handleSubmit(e)}>
                 <FormInput
                     type="text"
                     name="displayName"
                     value={signUpForm.displayName}
                     handleChange={handleChange}
                     label="Display Name"
                     required
                 />
                 <FormInput
                     type="email"
                     name="email"
                     value={signUpForm.email}
                     handleChange={handleChange}
                     label="Email"
                     required
                 />
                 <FormInput
                     type="password"
                     name="password"
                     value={signUpForm.password}
                     handleChange={handleChange}
                     label="Password"
                     required
                 />
                 <FormInput
                     type="password"
                     name="confirmPassword"
                     value={signUpForm.confirmPassword}
                     handleChange={handleChange}
                     label="Confirm Password"
                     required
                 />
                 <Button type="submit" title="Sign Up"/>
             </form>
         </div>
      );
 }