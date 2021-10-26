import React from 'react';
import Header from "./components/Header";
import Projects from './components/Projects';
import Main from "./components/Main";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skillset from './components/Skillset';
import About from './components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/skillset' component={Skillset}/>
          <Route path='/contacto' component={Contact}/>
        </Switch>        
        <Footer/>
      </Router>
    
     );
}

export default App;
