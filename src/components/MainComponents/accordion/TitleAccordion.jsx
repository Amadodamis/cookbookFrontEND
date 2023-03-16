import React from 'react'
import AccordionIcons from "./AccordionIcons"

function TitleAccordion({ id, nombreReceta, recetasAcordion, setRecetasAcordion, selected, setSelected, i,tipo }) {



    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }



    return (

        <div className='title-box' >

            <h2 className="title" onClick={() => toggle(i)} >
                {nombreReceta}
            </h2>
            <p>{tipo}</p>
            <AccordionIcons
                id={id}
                recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
            />
        </div>
    )
}

export default TitleAccordion