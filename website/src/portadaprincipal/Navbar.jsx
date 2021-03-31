import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";
import logo from '../components/imagenes/logo.png'
function Navbar() {
   const [navbar, setNavbar] = useState(false)

   const changeBackground = () =>{
      if(window.scrollY >=40){
         setNavbar(true)
      }else{
         setNavbar(false)
      } 
   }

   window.addEventListener('scroll', changeBackground, {passive: true});

  return (      
  <nav className={navbar ? 'navbar active' : 'navbar'}>
    <div className="logo">
      <Link to="/">
         <img  className="navbar-logo" src={logo} alt="devmayden"/>
      </Link>
    </div>

    <label htmlFor="btn" className="icon"><IoMenu/></label>
    <input type="checkbox" id="btn" style={{display:"none"}}/>

    <ul className="navbar-content">
       <li className="navbar-list"><Link className="navbar-link" to ="/">Inicio</Link></li>
       <li className="navbar-list"><Link className="navbar-link" to ="/blog">Blog</Link></li>
       <li className="navbar-list"><Link className="navbar-link" to ="/nosotros">Nosotros</Link></li>
       <li className="navbar-list"><Link className="navbar-link" to ="/servicios">Servicios</Link></li>
       <li className="navbar-list"><Link className="navbar-link" to ="/equipo">Nuestro Equipo</Link></li>
       <li className="navbar-list">
        <Link to="/contacto">
            <button className="btn1">Contacto</button>
        </Link>
       </li>
    </ul>
 </nav>
  );
}

export default Navbar;