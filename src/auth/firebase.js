import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
    apiKey: "AIzaSyB2vWuf7Rrr_uD--9PhU4C7Im4G5puxIX8",
    authDomain: "ironstone-movie-app.firebaseapp.com",
    projectId: "ironstone-movie-app",
    storageBucket: "ironstone-movie-app.appspot.com",
    messagingSenderId: "580448354139",
    appId: "1:580448354139:web:81426702b93be9c134a47e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
