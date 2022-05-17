
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZtAjSQunFfQqGpjo2CMIIbx-5hvf56tw",
    authDomain: "contact-manager-648dc.firebaseapp.com",
    databaseURL: "https://contact-manager-648dc-default-rtdb.firebaseio.com",
    projectId: "contact-manager-648dc",
    storageBucket: "contact-manager-648dc.appspot.com",
    messagingSenderId: "622600276550",
    appId: "1:622600276550:web:3ef1028fb943766030d847",
    measurementId: "G-06CWQYJFBT"
};

const fire = initializeApp(firebaseConfig);
const auth = getAuth(fire)
export default auth;