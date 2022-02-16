const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAUoztskl6aNhat6LFCIQIx7ISu69Lwlcw",
    authDomain: "kitkat123.firebaseapp.com",
    projectId: "kitkat123",
    storageBucket: "kitkat123.appspot.com",
    messagingSenderId: "266132662953",
    appId: "1:266132662953:web:baed9c59cabc738ac217b8",
    measurementId: "G-X5CYWPQHLL"
});

var db = firebase.firestore();

var menu = [
    {
        "id": 1,
        "name": "Focaccia al rosmarino",
        "description": "Wood fired rosemary and garlic focaccia",
        "price": 8.50,
        "type": "Appetizers"
    },
    {
        "id": 2,
        "name": "Burratta con speck",
        "description": "Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
        "price": 13.50,
        "type": "Appetizers"
    }
]

menu.forEach(function (obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});