import { useState } from "react"
import './accordion.css'

import ContentAccordion from "./ContentAccordion"
import TitleAccordion from "./TitleAccordion"

function Accordion({ recetasAcordion, setRecetasAcordion }) {

    const [selected, setSelected] = useState(null)

    if (recetasAcordion.length < 1) { return null }

    return (
        <div className='accordion' >

            {recetasAcordion.map((receta, i) => (

                <div className='item' key={i} >

                    <TitleAccordion
                        selected={selected} setSelected={setSelected} i={i}
                        recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
                        id={receta._id} nombreReceta={receta.receta}

                    />

                    <ContentAccordion

                        contentI={i} selected={selected}
                        procedimiento={receta.procedimiento} ingredientes={receta.ingredientes}
                        sector={receta.sector} apto={receta.apto} tipo={receta.apto}
                        porciones={receta.porciones}
                    />

                </div>

            ))}

        </div>
    )
};




export default Accordion;

