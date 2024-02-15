//initilaze firebase

import * as firebase from "firebase/app";
import serviceAccount from "../service_account.json";

console.log(serviceAccount);

console.log("Initializing Firebase");

var app = firebase.initializeApp(serviceAccount);


console.log("Firebase initialized");

export default app;
