import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAByu0PbfC4ivc5XuMh_Tj3nbzppyGRbw8",
    authDomain: "crown-db-b1c97.firebaseapp.com",
    databaseURL: "https://crown-db-b1c97.firebaseio.com",
    projectId: "crown-db-b1c97",
    storageBucket: "crown-db-b1c97.appspot.com",
    messagingSenderId: "693624680939",
    appId: "1:693624680939:web:64bdeefa29dbdf4dfa69ae",
    measurementId: "G-6R40MGLKQ8"
  };

  // function below stores our user in our firebase database known as fire store

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      // check if user exists , if he doesnt exist the function terminates
    if (!userAuth) return ;
     // searches for user based off their uinique id
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    // if user doesnt exist in store, the user is then added to store
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email,createdAt, ...additionalData})
        } catch (error){
            console.log('error creating user', error.message);
            
        }
    }
    return userRef;
  }

  export const addCollectionAndDocuments = async (
    collectionKey, // name of the collection on firebase
    objectsToAdd // the array/objects of data to add
  ) => {
    const collectionRef = firestore.collection(collectionKey); // creates a reference to the collection name you are adding
  
    const batch = firestore.batch(); // using batch to maker sure you add all of them at once and if anyone fails the entire upload fails.
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = (collections) => {

      const transformedCollection = collections.docs.map(doc => {
          const {title,items} = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title: title.toLowerCase(),
              items
          }
      });
      return transformedCollection
  }

  export const convertDirectorySnapshotToMap = (directory) => {
    const transformedDirectory  = directory.docs.map( doc => {
        const {title, imageUrl,linkUrl} = doc.data();
        return {
            id: doc.id,
            title,
            imageUrl,
            linkUrl
        }
    });
    return transformedDirectory;
  }
  
  // initialise app with the config object 

  firebase.initializeApp(config);

  // export firebase functions needed for the app;

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // get the google authentication provider function

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase ;