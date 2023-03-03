const { getDatabase, ref, onValue} = require("firebase/database");
const { initializeApp } = require('firebase/app');
async function endLoad()
{
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

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log("get database");
    const db = getDatabase();
    console.log("get start count ref");
    const starCountRef = ref(db, 'messages');
    console.log("get data");
    onValue(starCountRef, (snapshot) => 
    {
        console.log("Hello")
        const message = snapshot.val();
        console.log(new Date(message.date));
        console.log(message.date);
        createMessage(message.avatarUrl, message.username, new Date(message.date), message.content);
    });
    console.log("load ended");

    setTimeout(() => 
    {
        var messages = document.getElementById('all-messages');
        messages.style.overflowY = 'scroll';
        messages.scrollTop = messages.scrollHeight;

        document.getElementById("loading").remove();
    }, 2000)
}