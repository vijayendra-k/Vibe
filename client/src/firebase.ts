import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
// (These are dummy values for now until you create the real GCP project)
const firebaseConfig = {
  apiKey: "DUMMY_API_KEY",
  authDomain: "demo-vibe.firebaseapp.com",
  projectId: "demo-vibe",
  storageBucket: "demo-vibe.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// THE FLIP SWITCH: If we are running locally (npm run dev), connect to the local emulator!
if (import.meta.env.DEV) {
  console.log("Running locally! Connecting to Firebase Emulators...");
  connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectStorageEmulator(storage, 'localhost', 9199);
}

export { auth, db, storage };
