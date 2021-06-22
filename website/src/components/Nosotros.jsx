import React, {useEffect} from 'react'
import Portadas from '../portadacomponent/Portadas';
const Lineas = () => {
    useEffect(() => {
        document.title= `Nosotros | DevMayden`
    }, []);

    return (
        <>
        <Portadas title="Nosotros"/>
       
        </>
    )
}

export default Lineas
