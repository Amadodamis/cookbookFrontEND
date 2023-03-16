
import "./agregarReceta.css"

import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useRef } from "react"


import ModelReceta from "../modelRecetaComponents/ModelReceta"
import modeloReceta from "../../JS/modeloReceta"
import getValores from "../../JS/getValores"
import createRecipe from "../../services/createRecipe";


const AgregarReceta = () => {
    const navigate = useNavigate()
    const [dataFiltrada, setDataFiltrada] = useOutletContext();
    const [ingredientesArray, setingredientesArray] = useState([])


    let receta = modeloReceta;
    let nombreReceta = useRef(null);
    let sectorReceta = useRef(null);
    let tipoReceta = useRef(null);
    let porcionesReceta = useRef(null);
    let aptoVeganoReceta = useRef(null);
    let aptoCeliacoReceta = useRef(null);
    let procedimientoReceta = useRef(null);



    const agregarReceta = (e) => {

        e.preventDefault();

        let nuevaReceta = getValores(nombreReceta.current.value, sectorReceta.current.value, tipoReceta.current.value,
            porcionesReceta.current.value, aptoVeganoReceta.current.value, aptoCeliacoReceta.current.value,
            procedimientoReceta.current.value, ingredientesArray)

        createRecipe(nuevaReceta, dataFiltrada, setDataFiltrada)
        setingredientesArray([])
        navigate("/")
    }



    return (
        <div className="overlay" >
            <form onSubmit={agregarReceta} action="/" >
                <ModelReceta
                    receta={receta} ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray}

                    uRefNombre={nombreReceta} uRefSector={sectorReceta} uRefTipo={tipoReceta} uRefPorciones={porcionesReceta}
                    uRefVegano={aptoVeganoReceta} uRefCeliaco={aptoCeliacoReceta} uRefProcedimiento={procedimientoReceta}

                    nombreButton={"Agregar Receta"}
                />
            </form>
        </div>
    )
}



export default AgregarReceta
