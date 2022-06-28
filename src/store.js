import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {
  reduxFirestore,
  getFirestore,
  // createFirestoreInstance,
} from "redux-firestore";
import rootReducer from "./components/firebase/reducers/rootReducer";
import fbConfig from "./components/firebase/config/fbConfig";
import firebase from "firebase/app";
import {
  getFirebase,
  // ReactReduxFirebaseProvider
} from "react-redux-firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  compose(
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    ),
    reduxFirestore(firebase, 
        fbConfig
        )
  )
);
