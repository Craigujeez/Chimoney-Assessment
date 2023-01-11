import React from 'react';
import {useSelector} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../../styles/header.css'

const Header = ({history}) => {
    const isLoggedIn = useSelector(state => state.firebase.auth.uid);
    const {hidden} = useSelector(state => state.cart);
    return ( 
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'> Shop</Link>
                <Link className='option'> Contact</Link>
                { isLoggedIn ? <div 
                                    className='option' 
                                    onClick={() => auth.signOut().then(()=> history.push("/sign-in")) }
                                > 
                                    Sign Out
                                </div> :  <Link to='/sign-in'> <div className='option'> Sign In </div></Link>}
                <CartIcon/>
            </div>
            { hidden ? (null) : <CartDropdown/>}
        </div>
     );
}
 
export default withRouter(Header);