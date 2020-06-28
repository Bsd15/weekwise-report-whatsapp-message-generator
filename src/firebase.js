import * as firebase from "firebase/app";
// eslint-disable-next-line no-unused-vars
import database from "firebase/database";
const firebaseConfig = {
	apiKey: process.env.REACT_APP_BACKEND_APIKEY,
	authDomain: process.env.REACT_APP_BACKEND_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_BACKEND_DATABASE_URL,
	projectId: process.env.REACT_APP_BACKEND_PROJECT_ID,
	storageBucket: process.env.REACT_APP_BACKEND_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_BACKEND_MESSAGIND_SENDER_ID,
	appId: process.env.REACT_APP_BACKEND_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export default firebase;
