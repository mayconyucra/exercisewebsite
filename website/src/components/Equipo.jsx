import React, {useEffect, useState} from 'react';
import Portadas from '../portadacomponent/Portadas';
import './Equipo.css'

const Docentes = () => {
    const [equipo, setEquipo] = useState([])
    useEffect(() => {
        document.title = `Plana Profesional | Dev Mayden`
        obtenerDatos()
    }, [])

    //llamado a la api del personal
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:1337/docentes')
        const users = await data.json()
        setEquipo(users)
    }
    return ( 
        <>
        <Portadas title ="Conoce a Nuestro Team"/>
            <div className="containerd">
                <ul className="listd"> 
                    {
                equipo.map( item => (
                    <li key={item.id}>
                        <div className="content">
                            <div className="card">
                                <div className="firstinfo">
                                    <img src={`http://localhost:1337${item.perfil[0].url}`} alt={item.nombre}/>                        
                                    <div className="profileinfo">
                                        <h1>{item.nombre}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>))}
                </ul>
            </div>
        </>
)
}
export default Docentes;






