import AgregarIngrediente from "./AgregarIngrediente"
import Ingredientes from "./Ingredientes"

function IngredientesRow({ ingredientesArray, setingredientesArray }) {
    return (
        <section className="ingredientes">

            <AgregarIngrediente
                ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray}
            />

            <Ingredientes
                ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray} />

        </section>
    )
}

export default IngredientesRow
