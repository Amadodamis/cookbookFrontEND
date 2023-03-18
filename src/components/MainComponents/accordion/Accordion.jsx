import './accordion.css'

import { useState, useEffect } from "react"
import { getRecipesAcordion } from '../../../JS/acordionFunctions'

import ContentAccordion from "./ContentAccordion"
import TitleAccordion from "./TitleAccordion"

function Accordion({ recetasAcordion, setRecetasAcordion }) {


    const [selected, setSelected] = useState(null)
    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        getRecipesAcordion(recetasAcordion, recetas, setRecetas)
    }, [recetasAcordion])



    if (recetasAcordion.length < 1) { return null }

    return (
        <div className='accordion' >

            {recetas.map((receta, i) => (

                <div className='item' key={i} >

                    <TitleAccordion
                        selected={selected} setSelected={setSelected} i={i}
                        id={receta._id} nombreReceta={receta.receta} tipo={receta.tipo}
                        recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
                    />

                    <ContentAccordion

                        contentI={i} selected={selected}
                        procedimiento={receta.procedimiento} ingredientes={receta.ingredientes}
                        apto={receta.apto} porciones={receta.porciones}
                    />

                </div>

            ))}

        </div>
    )
};




export default Accordion;

