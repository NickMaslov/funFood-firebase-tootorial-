import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCvoxva-DhL1682W9XSgKSc1X3c5MDazbU",
  authDomain: "fun-food-friends-97013.firebaseapp.com",
  databaseURL: "https://fun-food-friends-97013.firebaseio.com",
  projectId: "fun-food-friends-97013",
  storageBucket: "fun-food-friends-97013.appspot.com",
  messagingSenderId: "1054356912370"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
