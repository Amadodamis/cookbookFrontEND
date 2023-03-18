import { getRecipesFilteredById } from "../services/getRecipesFilteredByIds";

function parseIdsRecetasAcordion(recetasAcordion) {
    let string = ""

    if (recetasAcordion.length > 0) {
        for (let index = 0; index < recetasAcordion.length; index++) {
            string = string + recetasAcordion[index] + "+"
        }
    }

    return string
}



function getRecipesAcordion(recetasAcordion, recetas, setRecetas) {

    let stringIds = parseIdsRecetasAcordion(recetasAcordion)

    let nuevaData = getRecipesFilteredById(stringIds)

    nuevaData.then(
        (recetas) => {
            setRecetas(recetas)
        })

}





/***************************************************************************/





function deleteId(id, recetasAcordion) {
    let nuevoArray = recetasAcordion.filter(rId => rId !== id)
    return nuevoArray;
}

function addDeleteAccordion(recetasAcordion, setRecetasAcordion, id) {

    if (recetasAcordion.includes(id)) {
        let nuevoArray = deleteId(id, recetasAcordion)
        setRecetasAcordion([...nuevoArray])
    }
    else {

        if (recetasAcordion.length < 9) {
            setRecetasAcordion([...recetasAcordion, id])
        } else {
            alert("No se pueden agregar mas de 9 recetas al acordion")
        }
    }

}





export { addDeleteAccordion, getRecipesAcordion }