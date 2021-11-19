import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAelomOrdMJuj5cflZzauQsx5G-D4LkJWM",
  authDomain: "canny-lass.firebaseapp.com",
  projectId: "canny-lass",
  storageBucket: "canny-lass.appspot.com",
  messagingSenderId: "150768286261",
  appId: "1:150768286261:web:563ec2ee1a6637b6a3cf7c",
  measurementId: "G-24YWYNLBLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
