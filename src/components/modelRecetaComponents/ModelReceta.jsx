import "./modelReceta.css"

import Sector from './Sector'
import Tipo from './Tipo'
import IngredientesRow from './IngredientesRow'
import Porciones from './Porciones'
import Procedimiento from './Procedimiento'
import TitleReceta from './TitleReceta'
import AptoVegano from './AptoVegano'
import AptoCeliaco from './AptoCeliaco'

import ButtonsSave from "../agregarReceta/ButtonsSave"
import IconClose from "../agregarReceta/iConClose"


function ModelReceta(props) {

    const { receta } = props
    const { ingredientesArray, setingredientesArray } = props
    const { nombreButton } = props
    const { uRefNombre, uRefSector, uRefTipo, uRefPorciones, uRefVegano, uRefCeliaco, uRefProcedimiento } = props


    return (
        <div className='model-receta'>

            <IconClose/>

            <TitleReceta placeholder={"Nombre de receta"} title={receta.receta} uRef={uRefNombre} />

            <section className='container-selects'>
                <Sector sector={receta.sector} uRef={uRefSector} />
                <Tipo tipo={receta.tipo} uRef={uRefTipo} />
                <Porciones porciones={receta.porciones} uRef={uRefPorciones} />
                <AptoVegano apto={receta.apto[0]} uRef={uRefVegano} />
                <AptoCeliaco apto={receta.apto[1]} uRef={uRefCeliaco} />
            </section>

            <div className='container-ing-proc'>
            
                <IngredientesRow ingredientesArray={ingredientesArray} setingredientesArray={setingredientesArray} />
                <Procedimiento placeholder={"Procedimiento"} procedimiento={receta.procedimiento} uRef={uRefProcedimiento} />

            </div>

            <ButtonsSave
                
                nombreButton={nombreButton}

            />

        </div>
    )
}


export default ModelReceta;

