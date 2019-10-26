// db.js

import Firebase from 'firebase';
 let config = {
    apiKey: "fillyourapikeyhere",
    authDomain: "",
    databaseURL: "https://react-native-crud-firebasedb.firebaseio.com/",
    projectId: "react-native-crud-firebasebd",
    storageBucket: "",
    messagingSenderId: "senderId"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
