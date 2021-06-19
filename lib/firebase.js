import firebase from "firebase/app";
import config from "../config/firebaseConfig";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

// Get a reference to the database service
if (typeof window !== "undefined" && !firebase.apps.length) {
  try {
    firebase.app();
  } catch (error) {
    firebase.initializeApp(config);
    firebase.analytics();
  }
}

export default firebase;
