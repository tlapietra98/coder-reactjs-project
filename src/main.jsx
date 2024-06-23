import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgim0c-a3Kqla247JQvNZhnQ63cCOES7w",
  authDomain: "coderreactjs57760.firebaseapp.com",
  projectId: "coderreactjs57760",
  storageBucket: "coderreactjs57760.appspot.com",
  messagingSenderId: "681928213924",
  appId: "1:681928213924:web:630b299c2b5db062e82d31"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
