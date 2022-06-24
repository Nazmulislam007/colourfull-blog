import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4wI8P3h4JlF4VBUyOijRBRah6PKn8ug8",
  authDomain: "colourful-blog.firebaseapp.com",
  projectId: "colourful-blog",
  storageBucket: "colourful-blog.appspot.com",
  messagingSenderId: "28661853832",
  appId: "1:28661853832:web:a8f30882996335e41df93d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
