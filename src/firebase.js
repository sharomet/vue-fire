import firebase from 'firebase';
import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCD9xd7TDnZYXDf3ifbfIfns8hHrKUnccc",
    authDomain: "vuefirebase-30953.firebaseapp.com",
    databaseURL: "https://vuefirebase-30953.firebaseio.com",
    projectId: "vuefirebase-30953",
    storageBucket: "vuefirebase-30953.appspot.com",
    messagingSenderId: "131192334061"
});

export const db = app.database()
export const usersRef = db.ref('users')
export const getDate = firebase.database.ServerValue.TIMESTAMP