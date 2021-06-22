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
        const data = await fetch('https://devmaydenheroku.herokuapp.com/teams')
        const users = await data.json()
        setEquipo(users)
    }
    return ( 
        <>
        <Portadas title ="Conoce a Nuestro Team"/>
<div class="container">
    <div class="row">
    { equipo.map( item => (
        <div key={item.id} class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
                <div class="picture">
                    <img class="img-fluid" src={`https://devmaydenheroku.herokuapp.com${item.perfil.url}`} alt={item.nombre}/>
                </div>
                <div class="team-content">
                    <h3 class="name">{item.nombre}</h3>
                    <h4 class="title">{item.cargo}</h4>
                </div>
                <ul class="social">
                    <li><a href={item.url} target="_team" class="fa fa-facebook" aria-hidden="true"></a></li>
                </ul>
            </div>
        </div>
    ))}
    </div>
</div>
        


        </>
)
}
export default Docentes;






