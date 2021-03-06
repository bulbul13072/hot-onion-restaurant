import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Foods></Foods>
    </div>
  );
}

export default App;
