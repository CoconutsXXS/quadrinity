import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getDatabase, ref, push, set, onValue, onChildAdded } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
    apiKey: "AIzaSyBW74Y9cDQ5p8lgR29T-xqYcjv4FdEvurY",
    authDomain: "quadrinity-2bfc0.firebaseapp.com",
    databaseURL: "https://quadrinity-2bfc0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quadrinity-2bfc0",
    storageBucket: "quadrinity-2bfc0.appspot.com",
    messagingSenderId: "64702278796",
    appId: "1:64702278796:web:324b7518c19d8f2d481fa9",
    measurementId: "G-TT93HV11JL"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const starCountRef = ref(db, 'messages');
onChildAdded(starCountRef, (snapshot) => 
{
    const message = snapshot.val();
    console.log(new Date(message.date));
    console.log(message.date);
    createMessage(message.avatarUrl, message.username, new Date(message.date), message.content);
});