import React from 'react'
import './Header.css';
import { IoMail } from "react-icons/io5";

const Header = () => {
    return (
        <div className="contact">
            <div className="descriptionepis"><span>DevMayden | Sitio Web Oficial</span></div>
            <div className="email">
                <span className="mail">devmayden@gmail.com</span>
                <IoMail className="iconmail"/> 
            </div>
        </div>
    )
}

export default Header
