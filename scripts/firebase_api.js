var firebaseConfig = {
    apiKey: "AIzaSyCi4D1jyaQAs-gNfwWcAp9BHq7QvNmnQKE",
    authDomain: "comp2800-164b5.firebaseapp.com",
    databaseURL: "https://comp2800-164b5.firebaseio.com",
    projectId: "comp2800-164b5",
    storageBucket: "comp2800-164b5.appspot.com",
    messagingSenderId: "237429609040",
    appId: "1:237429609040:web:a9a9771f951b389a163755",
    measurementId: "G-0B93PCK42R"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth()
  //firebase.analytics();
const db = firebase.firestore();
