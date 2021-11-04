import React from 'react';
import Header from "./components/Header";
import Projects from './components/Projects';
import "./components/Main.css"
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skillset from './components/Skillset';
import About from './components/About';
import proyecto_centro_de_verificacion from './pages/proyecto_centro_de_verificacion';
import proyecto_donnies_guitars from './pages/proyecto_donnies_guitars';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/proyectos' exact component={Projects}/>
          <Route path='/skillset' component={Skillset}/>
          <Route path='/contacto' component={Contact}/>
          <Route path='/proyectos/proyecto-centro-de-verificacion' component={proyecto_centro_de_verificacion}/>
          <Route path='/proyectos/proyecto-donnies-guitars' component={proyecto_donnies_guitars}/>
        </Switch>        
        <Footer/>
      </Router>
    
     );
}

export default App;
