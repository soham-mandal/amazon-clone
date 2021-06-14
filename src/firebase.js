import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBMClE67koRa_hN3urMTZ1NPIJuvdhL36s",
        authDomain: "react-b310a.firebaseapp.com",
        databaseURL: "https://react-b310a.firebaseio.com",
        projectId: "react-b310a",
        storageBucket: "react-b310a.appspot.com",
        messagingSenderId: "515330507073",
        appId: "1:515330507073:web:e0c8cef06947580acb61c0",
        measurementId: "G-48LMGZJZK7",
});

const auth = firebase.auth();

export { auth };