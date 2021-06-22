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
      const apicard = await fetch('https://devmaydenheroku.herokuapp.com/blogs')
      const jasoncard = await apicard.json()
      const reverse = jasoncard.slice(-3).reverse()
      setThreecard(reverse)
    }
    return ( 
      <div className="threecards">
        <div className="sectioncard">
          <div className="cardheader">
            <h3>Publicaciones Recientes</h3>
            <Link to="/blog">Ver más</Link>
          </div>  
          
          <div className="cardcontainer">
          {
              threecard.map(index =>(
                <section className="cardnotice" key={index.id}>
                  <Link className="linkcard" to={`/blog/${index.id}`}>
                    <div className="imgcard"><img className="cardportada" src={`https://devmaydenheroku.herokuapp.com${index.portadablog.url}`} alt=""/></div>
                    <div className="titlecard"><h3>{index.tituloblog}</h3></div>
                    <div className="datecard"><IoCalendarOutline className="iconcalendarcards"/> {index.fechablog}</div>
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