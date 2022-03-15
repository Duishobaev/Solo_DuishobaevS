import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq1pV6XyXYc-rpYRkQw1nh8AQoJAkuES0",
  authDomain: "solo-ds-8e029.firebaseapp.com",
  projectId: "solo-ds-8e029",
  storageBucket: "solo-ds-8e029.appspot.com",
  messagingSenderId: "80214811621",
  appId: "1:80214811621:web:668ec0d0bd945ba155c50c",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
