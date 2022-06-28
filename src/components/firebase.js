import firebase from "firebase/app";
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

export { firebase, storage };
