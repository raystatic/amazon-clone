import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGbruZezb9K-k_yehOsUiZRuIwD2HtlzM",
    authDomain: "clone-47077.firebaseapp.com",
    databaseURL: "https://clone-47077.firebaseio.com",
    projectId: "clone-47077",
    storageBucket: "clone-47077.appspot.com",
    messagingSenderId: "681772857252",
    appId: "1:681772857252:web:7a623e95867f538dc13331",
    measurementId: "G-YS9H5Y854F"
  };

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCZ1bXgXcjlBBL6oUsNaobS3seC97WUQ0g",
// //   authDomain: "clone-f0445.firebaseapp.com",
// //   databaseURL: "https://clone-f0445.firebaseio.com",
// //   projectId: "clone-f0445",
// //   storageBucket: "clone-f0445.appspot.com",
// //   messagingSenderId: "904179158012",
// //   appId: "1:904179158012:web:069c79b593c59f26830079",
// //   measurementId: "G-RCX3SH88Q6"
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyAaTZrlCjZ6zO_EY8Lot9k4hT6GWDyyL0M",
//   authDomain: "clone-edbff.firebaseapp.com",
//   databaseURL: "https://clone-edbff.firebaseio.com",
//   projectId: "clone-edbff",
//   storageBucket: "clone-edbff.appspot.com",
//   messagingSenderId: "460396379493",
//   appId: "1:460396379493:web:0e9fe85215fec3e913b58c",
//   measurementId: "G-64D40TVLT6"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};