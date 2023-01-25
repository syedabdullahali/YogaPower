// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJvzaEbE1dAg22tfnpdk0TnO92m8I1kug",
    authDomain: "uploadingfile-cb68e.firebaseapp.com",
    projectId: "uploadingfile-cb68e",
    storageBucket: "uploadingfile-cb68e.appspot.com",
    messagingSenderId: "877657240307",
    appId: "1:877657240307:web:1dfc6f15a2bc1ccaccbd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)