import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "../form/Form";
import '../../styles/collection-item.styles.css';

const CollectionItem = (props) => {
    const dispatch = useDispatch();
    const {id, name, price ,imageUrl} = props.item
    
    const AddToCart = () => {
        const payload = {
            id,
            name,
            price,
            imageUrl,
        }
        dispatch({type: "ADD_TO_CART", payload});
    };

    return ( 
        <div className="collection-item">
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
                />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button inverted title="Add to cart" onClick={()=> AddToCart()}/>
        </div>
     );
}
 
export default CollectionItem;