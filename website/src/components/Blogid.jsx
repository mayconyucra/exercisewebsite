import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Noticiaid = () => {
    const {id} = useParams()

    const [noticiap, setNoticiap] = useState([]);
    useEffect(() => {
        const getNoticiap = async () =>{
        const getn = await fetch(`http://localhost:1337/blogs/${id}`)
        const data1 = await getn.json()
        setNoticiap(data1)
    }
    getNoticiap()
    }, [id])

    return (
        <div>
            <h1>{noticiap.tituloblog}</h1>
            <p>{noticiap.descripcionblog}</p>
            <p>{noticiap.fechablog}</p>
        </div>
    )
}

export default Noticiaid
