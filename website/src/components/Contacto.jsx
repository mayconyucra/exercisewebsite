import React,{useEffect} from 'react'
import emailjs from 'emailjs-com';
import './Contacto.css'
import {FiMail, FiFacebook} from "react-icons/fi";
import Portadas from '../portadacomponent/Portadas';

export default function Contacto() {
    useEffect(() => {
        document.title = "Contacto | DevMayden"
     }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0q5mxtw', 'template_gx7thae', e.target, 'user_3EiM4ZLRPpxAYaOXH8LxS')
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
                <p>devmayden@gmail.com</p>
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