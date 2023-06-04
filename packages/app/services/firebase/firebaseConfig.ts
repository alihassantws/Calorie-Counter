import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0aRaC6jcj3G8IfB79El-b8Uk4YJ37I-g',
  authDomain: 'calorie-counter-450e5.firebaseapp.com',
  projectId: 'calorie-counter-450e5',
  storageBucket: 'calorie-counter-450e5.appspot.com',
  messagingSenderId: '692200635279',
  appId: '1:692200635279:web:61caf65449e48855b3a9fa',
  measurementId: 'G-5BXSFJM4M5',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore(app)
db.settings({ experimentalAutoDetectLongPolling: true, merge: true })
export { firebase, db, auth }

export default app
