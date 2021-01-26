import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

const clientCredentials = process.env.NEXT_PUBLIC_FIREBASE_CONFIG
  ? process.env.NEXT_PUBLIC_FIREBASE_CONFIG
  : '{}';

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(JSON.parse(clientCredentials));
  firebase.analytics();
}

export default firebase;
