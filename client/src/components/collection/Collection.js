import React from 'react';
import {useSelector} from 'react-redux';
import Spinner from "../spinner/spinner";
import CollectionItem from "../collection-item/CollectionItem";
import "../../styles/collection.styles.css";

const Collection = (props) => {
    const collectionid = props.match.params.collectionid;
    const {collection} = useSelector(state => state.shop);
    
    return ( 
        <div className="collection-page">
            {collection.length > 1 ? collection.filter(item => item.routeName === collectionid ).map(item => (
                <div className='collection-preview'>
                    <h2 className='title'>{collectionid.toUpperCase()}</h2>
                    <div className='items'>
                        {item.items.map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )) : <Spinner/>}
        </div>
     );
}
 
export default Collection;