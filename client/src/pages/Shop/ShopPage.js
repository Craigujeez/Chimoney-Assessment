import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../../components/collection/Collection";

const ShopPage = ({match}) => {

    return ( 
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route exact path={`${match.path}/:collectionid`} component={Collection}/>
        </div>
     );
}

export default ShopPage;