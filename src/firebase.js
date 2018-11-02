import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyBJdAS32N--WCLoqDUygpODZScR39INVrU",
  authDomain: "new-ng-recipe-57c34.firebaseapp.com",
  databaseURL: "https://new-ng-recipe-57c34.firebaseio.com",
  projectId: "new-ng-recipe-57c34",
  storageBucket: "new-ng-recipe-57c34.appspot.com",
  messagingSenderId: "594215408721"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
