import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { IoCalendarOutline } from "react-icons/io5";
import './Threecards.css'

const Threecards = () => {

  const [threecard, setThreecard] = useState([])
    useEffect(() => {
      getThreecards()
    }, []);

    const getThreecards = async() =>{
      const apicard = await fetch('http://localhost:1337/noticias')
      const jasoncard = await apicard.json()
      const reverse = jasoncard.slice(-3).reverse()
      setThreecard(reverse)
    }
    return ( 
      <div className="threecards">
        <div className="sectioncard">
          <div className="cardheader">
            <h3>Publicaciones Recientes</h3>
            <Link to="/noticias">Ver más</Link>
          </div>  
          
          <div className="cardcontainer">
          {
              threecard.map(index =>(
                <section className="cardnotice" key={index.id}>
                  <Link className="linkcard" to={`/noticias/${index.id}`}>
                    <div className="imgcard"><img className="cardportada" src={`http://localhost:1337${index.imagen.url}`} alt=""/></div>
                    <div className="titlecard"><h3>{index.titulo}</h3></div>
                    <div className="datecard"><IoCalendarOutline className="iconcalendarcards"/> {index.fecha}</div>
                  </Link>
                </section>
              ))
          }
          </div>
        </div>
      </div>
    )
}

export default Threecards

/*
<section className="cardnotice" key={card1.id}>
<Link className="linkcard">
  <div className="imgcard"><img className="cardportada" src={`http://localhost:1337${card1.imagen.url}`} alt=""/></div>
  <div className="titlecard"><h3>{card1.titulo}</h3></div>
  <div className="datecard">{card1.fecha}</div>
</Link>
</section>
*/