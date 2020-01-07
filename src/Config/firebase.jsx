import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDmtGLWDfOJD0NmVADpAx6e62WSsEWJTW8",
	authDomain: "tentino-db-auth-storage.firebaseapp.com",
	databaseURL: "https://tentino-db-auth-storage.firebaseio.com",
	projectId: "tentino-db-auth-storage",
	storageBucket: "tentino-db-auth-storage.appspot.com",
	messagingSenderId: "613852265243",
	appId: "1:613852265243:web:6ab410c2c1915a6e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
