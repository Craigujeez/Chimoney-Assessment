import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/ShoppingCart.svg";
import {useDispatch,useSelector} from "react-redux";
import "../../styles/cart-icon.css";

const CartIcon = () => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state=> state.cart);

    return ( 
        <div className="cart-icon" onClick={()=> dispatch({type: "TOGGLE_CART_HIDDEN"})}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItems.length}</span>
        </div>
     );
}
 
export default CartIcon;