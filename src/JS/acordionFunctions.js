function estaFunction(recetasAcordion, nombreNuevaReceta) {
    let estaLaReceta = false;
    recetasAcordion.forEach(receta => {
        if (receta.receta === nombreNuevaReceta) estaLaReceta = true;
    })

    return estaLaReceta
}


function deleteAcordion(receta, recetasAcordion, setRecetasAcordion, text) {
    text.current.classList.toggle("activeAccordion")
    let nombreNuevaReceta = receta.receta
    let nuevoArray = recetasAcordion.filter(recipe => recipe.receta !== nombreNuevaReceta)
    setRecetasAcordion(nuevoArray)
}

function addAcordion(receta, recetasAcordion, setRecetasAcordion, text) {
    if (recetasAcordion.length < 9) {
        text.current.classList.toggle("activeAccordion")
        setRecetasAcordion([...recetasAcordion, receta])
    }
    else { alert("No se pueden agregar mas de 9 recetas al acordion") }
}



export { estaFunction, deleteAcordion, addAcordion }