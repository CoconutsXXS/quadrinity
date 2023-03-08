import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getDatabase, ref, push, set, onValue, onChildAdded } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';
import { firebaseConfig } from './config.js';

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