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

// collection references
const usersCollection = db.collection('users')
const todosCollection = db.collection('todos')

// export utils/refs
export {
  usersCollection,
  todosCollection,
  auth,
  provider
}