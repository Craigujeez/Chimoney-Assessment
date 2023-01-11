import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import shop from './Shop.js';
import cart from "./cart";

const appReducer = combineReducers({
    shop,
    cart,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

const rootReducer = (state,action) => {
    return appReducer(state,action)
}
 
export default rootReducer;