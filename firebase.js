// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import firebase
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUqCtSYwYjtJI5sOncSMzFnZmGQCdWs60",
  authDomain: "valentinesresponse.firebaseapp.com",
  projectId: "valentinesresponse",
  storageBucket: "valentinesresponse.appspot.com",
  messagingSenderId: "86803176373",
  appId: "1:86803176373:web:067957ad8b5431f99117fc",
  measurementId: "G-ZJGHCQY0XQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const messageContainer = document.querySelector(".leave-message");

yesButton.addEventListener("click", () => {
  addDoc(collection(db, "buttonClicks"), {
    value: "yes",
    date: new Date(),
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  messageContainer.style.zIndex = 100;
  messageContainer.style.opacity = 1;
});

noButton.addEventListener("click", () => {
  addDoc(collection(db, "buttonClicks"), {
    value: "no",
    date: new Date(),
  });

  const x = Math.random() * 200;
  const y = Math.random() * 400;
  noButton.style = `transform: translate(${x}%, ${y}%)`;
});

const messageform = document.querySelector("#message");
const loveMessage = document.querySelector("#love-message");
messageform.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageform["mesiji"].value;
  addDoc(collection(db, "messages"), {
    message: message,
    date: new Date(),
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      messageform.reset();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  messageform.style.transform = "translateY(-100%)";
  messageform.style.opacity = 0;

  loveMessage.style.transform = "translateY(-200%)";
  loveMessage.style.opacity = 1;
});
