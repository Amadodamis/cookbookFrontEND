import parseCantidadUnidad from "../../JS/parseCantidadUnidad";
import EliminarIngrediente from "./eliminarIngrediente";


function Ingredientes({ ingredientesArray, setingredientesArray }) {




    return (
        <div className="ingredientes-map">
            <h3 className="lista-ingredientes">INGREDIENTES:</h3>
            <div className="container-ingredientes-map" >
                {ingredientesArray.length ?
                    (
                        ingredientesArray.map((ingrediente, i) => (

                            <div className='container-ingrediente-rn' key={i}>
                                <h4 >{ingrediente.ingrediente} - {parseCantidadUnidad(ingrediente.cantidad, ingrediente.unidad)} </h4>

                                <EliminarIngrediente
                                    ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray}
                                    ing={ingrediente.ingrediente}
                                />

                            </div>

                        ))
                    ) :
                    (
                        <p><i>No hay ingredientes</i></p>
                    )
                }
            </div>
        </div>
    )
}


export default Ingredientes