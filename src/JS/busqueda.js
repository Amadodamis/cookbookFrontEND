////////////////////////////////////
function comprobarIngrediente(busq, ingredientes) {
    let tieneElIngrediente = false;

    for (let index = 0; index < ingredientes.length; index++) {
        if (busq === ingredientes[index].ingrediente) {
            return true;
        }
    }

    return tieneElIngrediente;
}

function comprobarApto(busq, apto) {
    let esApto = false;
    esApto = apto.includes(busq)
    return esApto;
}


function checkData(receta, busquedas) {
    let esta = false;

    let aciertosBusquedas = 0;
    

    for (let index = 0; index < busquedas.length; index++) {
        let busq = busquedas[index].toUpperCase();
        
        //Si la receta coincide en el nombre
        if (busq === receta.receta) { aciertosBusquedas++ }

        //si la receta pertenece al sector
        else if (busq === receta.sector.toUpperCase()) { aciertosBusquedas++ }

        //si la receta es del tipo de plato
        else if (busq === receta.tipo.toUpperCase()) { aciertosBusquedas++ }

        //si la receta es apta
        else if (comprobarApto(busq, receta.apto)) { aciertosBusquedas++ }

        //si la receta tiene el ingrediente
        else if (comprobarIngrediente(busq, receta.ingredientes)) { aciertosBusquedas++ }
    }

    if (aciertosBusquedas === busquedas.length) {
        esta = true;
    }
    return esta;
}


export default checkData;
