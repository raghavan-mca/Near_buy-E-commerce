const firebaseConfig = {
    apiKey: "AIzaSyCYrVEGK90sBqg1panH9z8otuurCfEkHUc",
    authDomain: "near-buy-b55d1.firebaseapp.com",
    projectId: "near-buy-b55d1",
    storageBucket: "near-buy-b55d1.appspot.com",
    messagingSenderId: "52917906046",
    appId: "1:52917906046:web:dd69a029cd70d66cc5062f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth= firebase.auth();
  