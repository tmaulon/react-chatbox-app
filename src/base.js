import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn0D3TaW14G_tRZmsUsTssZdUnanEIvMs",
  authDomain: "react-chat-app-928ca.firebaseapp.com",
  databaseURL: "https://react-chat-app-928ca.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
