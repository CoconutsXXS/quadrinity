import dotenv from 'https://unpkg.com/dotenv@latest';
dotenv.config();

export const firebaseConfig = 
{
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "quadrinity-2bfc0.firebaseapp.com",
    databaseURL: "https://quadrinity-2bfc0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "quadrinity-2bfc0.appspot.com",
    messagingSenderId: "64702278796",
    appId: "1:64702278796:web:324b7518c19d8f2d481fa9",
    measurementId: "G-TT93HV11JL"
};
