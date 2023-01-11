import React from 'react';
import {useSelector} from 'react-redux';
import Spinner from "../spinner/spinner";
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import "../../styles/collections-overview.styles.css"

const CollectionsOverview = ({match}) => {
    const {collection} = useSelector(state => state.shop);
    return ( 
        <div className="collection-preview">
            { collection.length > 0 ? collection.map(item => <PreviewCollection key={item.id} name={item.routeName} title={item.title} items={item.items} match={match} />) : <Spinner/>}
        </div>
     );
}
 
export default CollectionsOverview;