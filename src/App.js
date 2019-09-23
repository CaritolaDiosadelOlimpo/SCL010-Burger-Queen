import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
  <Router>
   <div className = "App">
     <ul>
       <li>
         <Link to = "/home">Home</Link>
         </li>
       <li>
         <Link to = "/about">About</Link>
         </li>
       <li>
         <Link to = "/projects">Projects</Link>
         </li>
     </ul>
    

     <Route exact path="/home" component={ Home }/>
     <Route path = "/about" component = { About} />
     <Route path= "/projects" component = { Projects} />
      

    </div>
  </Router>
  );
}

export default App;
