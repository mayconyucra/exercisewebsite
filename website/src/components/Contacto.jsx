import React from 'react'
import emailjs from 'emailjs-com';
import './Contacto.css'
import {FiMail, FiFacebook} from "react-icons/fi";
import Portadas from '../portadacomponent/Portadas';

export default function Contacto() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('appsistemas', 'template_36fwro7', e.target, 'user_eZwTEuY5XAIA44B8CDoLS')
      .then((result) => {
          alert('mensaje enviado')
      }, (error) => {
          alert(error.message)
      });
      e.target.reset();
  }

  return (
      <>
      <Portadas title="Formulario de Contacto"/>
    <div className="contactcontainer">
    <h1>Contacto</h1>
    <div className="contacto">
        <div className="info">
            <div className="col">
                <FiMail/>
                <p>examplesite@gmail.com</p>
            </div>
            <div className="redes-s">
                <a href="https://www.facebook.com/mayconyucra" target="developer"><FiFacebook/></a>
            </div>
        </div> 
        <form className="column" onSubmit={sendEmail}>
            <input type="text" placeholder="Nombre" className="form-control" name="name"></input>
            <input type="email" placeholder="Email" className="form-control" name="email"></input>
            <textarea name="message" placeholder="Mensaje" id=""className="form-control" cols="30" rows="5"></textarea> 
            <input type="submit" className="btn btn-primary" value="Enviar" />                   
        </form>
    </div>
    </div>
    </>
  );
}