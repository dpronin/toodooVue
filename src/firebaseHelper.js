import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyDuZfn5e6Hst028bAMneKqq4Nkrfm96Lno',
  authDomain: "toodoo-81a6d.firebaseapp.com",
  databaseURL: "https://toodoo-81a6d.firebaseio.com",
  projectId: "toodoo-81a6d",
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const login = () => {
  firebase.auth().signInWithRedirect(provider)
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    })
};
const logout = () => {
  firebase.auth().signOut()
    .then(function () { })
    .catch(function (error) {
      console.log(error)
    });
}
// collection references
const usersCollection = db.collection('users')
const todosCollection = db.collection('todos')

// export utils/refs
export {
  db,
  usersCollection,
  todosCollection,
  auth,
  login,
  logout,
}