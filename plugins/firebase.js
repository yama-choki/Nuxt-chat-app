import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp(
    {
      apiKey: 'AIzaSyA0dKkiJQPJWTZKRPRfrWVVJkbBT9-xSDc',
      authDomain: 'chat-app-d6e59.firebaseapp.com',
      projectId: 'chat-app-d6e59',
      storageBucket: 'chat-app-d6e59.appspot.com',
      messagingSenderId: '303487276515',
      appId: '1:303487276515:web:2b19dfe1fdc1e752077cd6',
      measurementId: 'G-2WYT6QJMVQ'
    }
  )
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    auth: Firebase.auth,
    firestore: Firebase.firestore
  }
  inject('fb', $fb)
}
