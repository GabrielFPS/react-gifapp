import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //hook custom
    const {images, isLoanding} = useFetchGifs(category);



    /* USO DE HOOK STANDAR
    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setimages(newImages);
    }

    //permite ejecutar solamente una vez una funcion cuando se renderiza completamente todo el componente
    useEffect(()=>{
        getImages(); //NO aceptra promesas, solo funciones
    },[])
    
    */

    return (
        <>
            <h3>{category}</h3>
            {
                isLoanding && (<h2>Cargando ...</h2>)
            }
            <div className="card-grid"> 
                {
                    images.map( (image) => (
                    <GifItem key={image.id} { ...image }/>
                    ))
                }
            </div>
        </>
    )
}
