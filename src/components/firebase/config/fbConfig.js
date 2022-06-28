import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBXpmCLJHg27QkqcDUEFvA7gEVpkq8wS34",
    authDomain: "pizza-formaggio.firebaseapp.com",
    databaseURL: "https://pizza-formaggio.firebaseio.com",
    projectId: "pizza-formaggio",
    storageBucket: "pizza-formaggio.appspot.com",
    messagingSenderId: "486441599393",
    appId: "1:486441599393:web:0bdf4397cec271cea2cbe0",
    measurementId: "G-M84WWC32TF",
  });
}

const storage = firebase.storage();
// export { firebase, storage };

export { storage, firebase as default };

// import firebase from "firebase/app";
// import "firebase/storage";

// if (!firebase.apps.length) {
//    firebase.initializeApp({
//       apiKey: "AIzaSyCLQqgq7hGIsQxVb3hJb_S82Kr4eyRWUVk",
//       authDomain: "shop-maroc.firebaseapp.com",
//       databaseURL: "https://shop-maroc.firebaseio.com",
//       projectId: "shop-maroc",
//       storageBucket: "shop-maroc.appspot.com",
//       messagingSenderId: "959083114168",
//       appId: "1:959083114168:web:94b7e595138a2d47d08e4d",
//       measurementId: "G-23R3VGKM0N",
//    });
// }

// const storage = firebase.storage();

// export { firebase, storage };
