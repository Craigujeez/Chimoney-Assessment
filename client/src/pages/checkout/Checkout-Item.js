import React from 'react';
import {useDispatch} from "react-redux";
import "../../styles/checkout-item.styles.css";

const CheckoutItem = (props) => {
    const {imageUrl,name,quantity,price} = props.item;
    const dispatch = useDispatch();
    return ( 
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.item})}> &#10094; </div>
                <span className="value"> {quantity} </span>
                <div className="arrow" onClick={()=> dispatch({type: "ADD_TO_CART", payload: props.item})}> &#10095; </div>
            </span>
            <span className="price">${price} </span>
            <div className="remove-button" onClick={()=> dispatch({type: "CLEAR_ITEM_FROM_CART", payload: props.item})}> &#10005; </div>
        </div>
     );
}
 
export default CheckoutItem;