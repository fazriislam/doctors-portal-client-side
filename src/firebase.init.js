// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4n-klavdhX839tvarsGEZAt9RPfTX0Vk",
  authDomain: "doctors-portal-c64ad.firebaseapp.com",
  projectId: "doctors-portal-c64ad",
  storageBucket: "doctors-portal-c64ad.appspot.com",
  messagingSenderId: "227526306628",
  appId: "1:227526306628:web:01eba488e74305eaea8511",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;