import React, {useEffect} from 'react'
import Portadas from '../portadacomponent/Portadas';

const Servicios = () => {
    useEffect(() => {
        document.title = `Servicios | DevMayden`
    }, []);

    return (
        <>
            <Portadas title="Nuestros Servicios"/>
        </>
    )
}

export default Servicios
