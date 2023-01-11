import {firestore, convertCollectionsSnapshotToMap, convertDirectorySnapshotToMap} from "../firebase/firebase.utils";

const initialState={
    user: null,
    collection: [],
    directory: [],
}

const Shop = (state=initialState, action) => {
    switch (action.type) {
        case "LOAD_USER":
            return {
              ...state,
              user: action.user,
            };
        case "UPDATE_COLLECTION":
          return {
            ...state,
            collection: action.result
          };
        case "UPDATE_DIRECTORY":
          return {
            ...state,
            directory: action.result
          };
    
        default:
            return state;
    }
}

export default Shop;

export const updateCollection = () => {
  return (dispatch) => {
    try {
      const collectionRef = firestore.collection("collections");
  
      return collectionRef.onSnapshot( async snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch({type: "UPDATE_COLLECTION", result: collectionsMap});
      })

    } catch(err){
      alert(err)
    }
  }
}

export const updateDirectory = () => {
  return (dispatch) => {
    try {
      const directoryRef = firestore.collection("directory");
  
      return directoryRef.onSnapshot( async snapshot => {
          const directoryMap = convertDirectorySnapshotToMap(snapshot);
          dispatch({type: "UPDATE_DIRECTORY", result: directoryMap});
      })

    } catch(err){
      alert(err)
    }
  }
}