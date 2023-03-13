import "./editarReceta.css"
import { useNavigate, useLoaderData, useOutletContext } from "react-router-dom";
import { useState, useRef } from "react"

import ModelReceta from "../modelRecetaComponents/ModelReceta"
import getValores from "../../JS/getValores"
import editRecipe from "../../services/editRecipe";

function EditarReceta() {

    const navigate = useNavigate()

    const receta = useLoaderData();
    const [dataFiltrada, setDataFiltrada] = useOutletContext();
    const [ingredientesArray, setingredientesArray] = useState([...receta.ingredientes])

    let nombreReceta = useRef(receta.receta);
    let sectorReceta = useRef(receta.sector);
    let tipoReceta = useRef(receta.tipo);
    let porcionesReceta = useRef(receta.porciones);
    let aptoVeganoReceta = useRef(receta.apto[0]);
    let aptoCeliacoReceta = useRef(receta.apto[1]);
    let procedimientoReceta = useRef(receta.procedimiento);


    const editarReceta = (e) => {
        e.preventDefault();

        let nuevaReceta = getValores(nombreReceta.current.value, sectorReceta.current.value, tipoReceta.current.value,
            porcionesReceta.current.value, aptoVeganoReceta.current.value, aptoCeliacoReceta.current.value,
            procedimientoReceta.current.value, ingredientesArray)

        editRecipe(receta._id, nuevaReceta,dataFiltrada,setDataFiltrada)

        navigate("/")
    }



    return (
        <div className="overlay" >
            <form onSubmit={editarReceta} action="/" >
                <ModelReceta
                    receta={receta} ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray}

                    uRefNombre={nombreReceta} uRefSector={sectorReceta} uRefTipo={tipoReceta} uRefPorciones={porcionesReceta}
                    uRefVegano={aptoVeganoReceta} uRefCeliaco={aptoCeliacoReceta} uRefProcedimiento={procedimientoReceta}

                    nombreButton={"Editar receta"}
                />
            </form>
        </div>
    )
}

export default EditarReceta
