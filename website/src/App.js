import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom"; 
import Header from './portadaprincipal/Header.jsx';
import Navbar from './portadaprincipal/Navbar.jsx';
import Carrusel from './portadaprincipal/Carrusel.jsx'
import Threecards from './portadaprincipal/Threecards.jsx'
import Animation from './portadaprincipal/Animation';
import Onecomunicado from './portadaprincipal/Onecomunicado';
import Footer from './portadaprincipal/Footer.jsx'

import Blog from './components/Blog.jsx';
import Blogid from './components/Blogid.jsx';
import Nosotros from './components/Nosotros.jsx';
import Servicios from './components/Servicios.jsx';
import Equipo from './components/Equipo.jsx'
import Contacto from './components/Contacto';
function App() { 
  return (
    <Router>
      <Header/>
      <Navbar/>
        <Switch>   
          <Route path="/" exact>
            <Carrusel/>
            <Threecards/>
            <Animation/>
            <Onecomunicado/>
          </Route>

          <Route path="/blog/:id">
            <Blogid/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route> 

            <Route path="/nosotros">
            <Nosotros/>
          </Route> 
               
          <Route path="/servicios">
            <Servicios/>
          </Route>    

          <Route path="/equipo">
            <Equipo/> 
          </Route>  
             
          <Route path="/contacto">
            <Contacto/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;

