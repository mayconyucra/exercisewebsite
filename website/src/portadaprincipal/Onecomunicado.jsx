import React,{useState, useEffect} from 'react'
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom'
import Comunicado from '../components/imagenes/Comunicado.jpg'
import './Onecomunicados.css'

const Onecomunicado = () => {

    const [title, setTitle] = useState([0])
    useEffect(() => {
      getTitle()
    }, []);

    const getTitle = async() =>{
      const titlecard = await fetch('http://localhost:1337/comunicados')
      const jsoncard = await titlecard.json()
      setTitle(jsoncard.slice(-1)[0])
    }
    return (
        <div className="comunicatecontainer">
            <div className="comunicado">
                <header className="headercomunicate">
                    <h3>Comunicados</h3>
                    <Link>Mas {'>>'}</Link>
                </header>
                <section className="containerimgcom">
                    <Link>
                        <img className="imgcm" src={Comunicado} alt="Comunicado"/>
                        <div className="titulocomunicado"><h2>{title.titulocomunicado}</h2><span>Ver más</span></div>
                    </Link>
                </section>
            </div>
            <div className="comunicatedetail">
                <Iframe url="http://www.youtube.com/embed/NSf3o-wxtQ0"
                    width="450px"
                    height="280px"
                    id="myId"
                    className="myClassname"/>
            </div> 
        </div>
    )
}

export default Onecomunicado
