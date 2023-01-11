/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route,Switch, Redirect} from 'react-router-dom';
import {updateDirectory,updateCollection} from "./reducers/Shop"
import Homepage from './pages/Homepage';
import Header from './components/header/Header';
import ShopPage from './pages/Shop/ShopPage';
import Checkout from './pages/checkout/Checkout';
import SignInPage from './pages/SignIn/SignIn-and-SignOut-Page';
import Collection from './components/collection/Collection';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';
import './App.css'


const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.firebase.auth);
  const {directory,collection} = useSelector(state => state.shop);

  const setUser = (user) => {
    dispatch({type:'LOAD_USER', user: user})
  }

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); // checks if user exists in store and if not adds to store
  
        userRef.onSnapshot(snapShot => {
          setUser({id: snapShot.id, ...snapShot.data()});
        })
        console.log(userAuth, 'user');
      } else setUser(userAuth);
  
    }) 
    
    if(directory.length < 1){
      updateDirectory()(dispatch);
    }

    if(collection.length < 1){
      updateCollection()(dispatch);
    }
    
    return ()=>{
      unsubscribeFromAuth();
    }
  }, [])
  

  return ( 
    <>
      <Header/>
            <Switch>
                <Route exact path='/' render={() => isLoggedIn ? (<Homepage/>) : (<SignInPage/>)}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' render={() => isLoggedIn.uid ? (<Checkout/>) : (<SignInPage/>)} />
                <Route exact path ='/sign-in' render={() => isLoggedIn.uid ? (<Redirect to="/"/>) : (<SignInPage/>)}/>
                <Route path={`/shop/:collectionid`} component={Collection}/>
            </Switch>
    </>
   );
}
 
export default App;
