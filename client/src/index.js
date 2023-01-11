import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {Provider,useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from "firebase/app";
import fbConfig from "./firebase/firebase.utils";
import rootReducer from './reducers/index';
import {BrowserRouter} from 'react-router-dom';
import Spinner from "./components/spinner/spinner.js";
import App from './App';
import * as serviceWorker from './serviceWorker';

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

if (process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}


const store = createStore(rootReducer,
    compose(
        applyMiddleware(...middlewares),
        reduxFirestore(fbConfig)
    )
);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    if (!auth.isLoaded) return <Spinner/>;
        return children
}

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <AuthIsLoaded>
                        <App/>
                    </AuthIsLoaded>
                </ReactReduxFirebaseProvider>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
