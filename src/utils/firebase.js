// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE,
//   authDomain: "blogauth-6edc0.firebaseapp.com",
//   projectId: "blogauth-6edc0",
//   storageBucket: "blogauth-6edc0.appspot.com",
//   messagingSenderId: "872875577946",
//   appId: "1:872875577946:web:0ba56791c06d5baa8cbe63",
// };

// export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogauth-6edc0.firebaseapp.com",
  projectId: "blogauth-6edc0",
  storageBucket: "blogauth-6edc0.appspot.com",
  messagingSenderId: "872875577946",
  appId: "1:872875577946:web:0ba56791c06d5baa8cbe63",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
