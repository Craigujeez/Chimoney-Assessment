import firebase,{firestore} from "../firebase/firebase.utils";

const initialState = {
    data: [],
    authErr: null,
}

const auth = (state = initialState,action) => {
    
    switch (action.type) {
        case "LOGIN_SUCCESS":
        return {
            ...state,
            data: action.result,
            authErr: null,
            status: "logged in",
        };
        case "LOGIN_ERROR":
        return {
            ...state,
            authErr: action.err.message,
        };
        case "SIGN_OUT_SUCCESS":
        return {
            ...state,
            data: action.result,
            status: "logged out",
        };
        case "SIGN_OUT_ERROR":
        return state;
        case "CREATE_USER_SUCCESS":
        return {
            ...state,
            authErr:null,
        };
        case "CREATE_USER_ERROR":
        return {
            ...state,
            authErr: action.err.message,
        }
        default:
            return state
    }
}

export default auth;

export const SignInUser = (credentials) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: "LOGIN_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "LOGIN_ERROR", err})

        });
    }
}

export const SignOutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(()=>{
            dispatch({type: "SIGN_OUT_SUCCESS"})
        }).catch((err)=>{
            dispatch({type: "SIGN_OUT_ERROR", err})

        })
    }
}

export const SignUpUser = (data) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            data.email,
            data.password
        ).then((resp)=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                displayName: data.displayName
            })
        }).then(()=>{
            dispatch({type: "CREATE_USER_SUCCESS"});
        }).catch((err)=>{
            dispatch({type: "CREATE_USER_ERROR", err})

        });
    }
}