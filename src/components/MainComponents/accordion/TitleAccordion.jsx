import React from 'react'
import AccordionIcons from "./AccordionIcons"

function TitleAccordion({ id, nombreReceta, selected, setSelected, i, tipo, recetasAcordion, setRecetasAcordion }) {


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (

        <div className='title-box' >
            <div className=''>

                <h2 className="title" onClick={() => toggle(i)} >
                    {nombreReceta}
                </h2>
                <p>{tipo}</p>
            </div>


            <AccordionIcons
                id={id}
                recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
            />
        </div>
    )
}

export default TitleAccordion