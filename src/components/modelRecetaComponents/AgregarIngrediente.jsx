import { useRef } from "react"
import Unidad from "./Unidad"
import validacionNuevoIngrediente from "../../JS/validacionNuevoIngrediente";

function AgregarIngrediente({ ingredientesArray, setingredientesArray }) {

    let nombreIngrediente = useRef(null);
    let cantidad = useRef(null)
    let uni = useRef(null)

    const agregarIngredienteFunction = () => {
        let nuevoIngrediente = validacionNuevoIngrediente(nombreIngrediente.current.value, cantidad.current.value, uni.current.value)

        if (nuevoIngrediente !== undefined) setingredientesArray([...ingredientesArray, nuevoIngrediente])
    }

    return (
        <section className='agregar-ingredientes'>

            <div className='container-ing-unidad-cantidad'  >
                <input className="input-ingrediente" placeholder='Ingrediente' name="nombreIngrediente" ref={nombreIngrediente} />
                <div className='container-unidad-cantidad'>
                    <input type="number" min="0" placeholder={0} className="input-cantidad" name="cantidad" ref={cantidad} />
                    <Unidad uni={uni} />
                </div>
            </div>
            <button className="btn-modal-recipe" type="button" onClick={agregarIngredienteFunction}>Agregar</button>
        </section>
    )
}

export default AgregarIngrediente