import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import CartItem from "../cart-item/Cart-Item";
import {Button} from "../form/Form"
import "../../styles/cart-dropdown.css";

const Cart = ({history}) => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                ) : (<span className="empty-message"> Your cart is empty </span>)
                    
                }
            </div>
            <Button 
                title="Go To Checkout" 
                onClick={() => {
                    dispatch({type:"TOGGLE_CART_HIDDEN"})
                    history.push("/checkout") 
                }}
            />
        </div>
     );
}
 
export default withRouter(Cart) ;