import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
  <Route>
   <div className = "App">
     <ul>
       <li>
         <link to = "/home">Home</link>
         </li>
       <li>
         <link to = "/about">About</link>
         </li>
       <li>
         <link to = "/projects">Projects</link>
         </li>
     </ul>
    

     <Router exact path="/home" component={ Home }/>
     <Router path = "/about" component = { About} />
     <Router path= "/projects" component = { Projects} />
      

    </div>
  </Route>
  );
}

export default App;
