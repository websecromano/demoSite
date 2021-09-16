import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import * as rtdb from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMu1ndG9TJLrusPwKclacSOb5gN0D3nWE",
    authDomain: "websecromano.firebaseapp.com",
    databaseURL: "https://websecromano-default-rtdb.firebaseio.com",
    projectId: "websecromano",
    storageBucket: "websecromano.appspot.com",
    messagingSenderId: "860340447391",
    appId: "1:860340447391:web:769579800efe33d2c51aaa",
    measurementId: "G-XBXGW7V8QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = rtdb.getDatabase(app);
let titleRef = rtdb.ref(db, "/");
let billyRef = rtdb.child(titleRef, "Billy");

let button = document.querySelector("#button");

//Change button's inner text
//button.innerHTML = "Hello";

button.addEventListener("click", alertFunc);
function alertFunc()
{
    rtdb.set(billyRef, 30);
}