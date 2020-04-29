import firebase from "firebase/app";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBHL-_THt4RdoI-X3VqoggXS5QR6nVUK18",
    authDomain: "tenedores-b7d07.firebaseapp.com",
    databaseURL: "https://tenedores-b7d07.firebaseio.com",
    projectId: "tenedores-b7d07",
    storageBucket: "tenedores-b7d07.appspot.com",
    messagingSenderId: "167889815017",
    appId: "1:167889815017:web:876d77f3a799393652b778"
  };

  export const firebaseapp= firebase.initializeApp(firebaseConfig); 
