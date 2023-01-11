import React from 'react';
import {Link} from "react-router-dom"
import '../../styles/collection-preview.styles.css'
import CollectionItem from '../collection-item/CollectionItem';

const PreviewCollection = ({title, items,name,match}) => {
    return ( 
        <div className='collection-preview'>
            <Link className='title' to={`${match.path}/${name}`}>{title.toUpperCase()}</Link>
            <div className='preview'>
                {items.filter((item,index) => index < 4 ).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
     );
}
 
export default PreviewCollection;