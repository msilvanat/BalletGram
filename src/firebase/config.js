import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// My web app Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkGmbXOnj8HR_E9tHJNKogL2oeUspDIYs",
    authDomain: "photogram-mst.firebaseapp.com",
    projectId: "photogram-mst",
    storageBucket: "photogram-mst.appspot.com",
    messagingSenderId: "697660353263",
    appId: "1:697660353263:web:5f762760b4037e9c91c91a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize the storage service and the firebase service
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };

