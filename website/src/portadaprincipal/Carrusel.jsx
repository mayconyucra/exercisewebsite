import React, {useEffect, useState} from 'react';
import './Carrusel.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

const Carrusel = () => {
    const [portada, setPortada] = useState([])

    useEffect(() =>{
      document.title= `DevMayden | Sitio Web Oficial`
        obtenerPortada()

    }, [])

    //api de imagenes silde

    const obtenerPortada = async() =>{
        const data = await fetch('http://localhost:1337/portada')
        const images = await data.json()
        setPortada(images.portadaprincipal) 
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === portada.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? portada.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={portada} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {
        portada.map(item => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.id}
          className="img-portada"
        >
          <img src={`http://localhost:1337${item.url}`} className="imgport" alt="portada"/>
          <CarouselCaption className="carousel-caption" captionHeader={item.caption} captionText={''}/>
        </CarouselItem>
      )
    )}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
}

export default Carrusel
