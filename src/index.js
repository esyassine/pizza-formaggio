import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import {
   createFirestoreInstance,
 } from "redux-firestore";
 import firebase from "firebase/app";
 import {
   //getFirebase,
   ReactReduxFirebaseProvider,
 } from "react-redux-firebase";
import "./index.scss";

const rrfConfig = {
   userProfile: "users",
   useFirestoreForProfile: true,
   attachAuthIsReady: true,
 };
 
const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance,
};

ReactDOM.render(
   <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
         <App />
      </ReactReduxFirebaseProvider>
   </Provider>,
document.getElementById("root")
);

 

//  ReactDOM.render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>,
//    document.getElementById("root")
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
