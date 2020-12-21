import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PageController from "./MainPages/PageController"
import {FirestoreContextProvider} from "./FirestoreContext";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

function App() {
    firebase.initializeApp({
        apiKey: "AIzaSyDTiHnBVlmgt_yxIFJ8niebJI6y2V3N_YE",
        authDomain: "loveyou-3826b.firebaseapp.com",
        projectId: "loveyou-3826b"
    })

    const db = firebase.firestore();
    return (
        <FirestoreContextProvider value={db}>
            <Router>

                <div className="App">
                    <PageController/>
                </div>

            </Router>
        </FirestoreContextProvider>

    );
}

export default App;
