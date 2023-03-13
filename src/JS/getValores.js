function getValores(nombre, sector, tipo, porciones, aptoV, aptoC, procedimiento, ingredientes) {
    let porc;
    if (porciones === "PORCIONES") {
        porc = 1;
    }

    let nuevaReceta = {
        receta: nombre,
        sector: sector,
        tipo: tipo,
        porciones: porc,
        apto: [aptoV, aptoC],
        procedimiento: procedimiento,
        ingredientes: [...ingredientes]
    }
    return nuevaReceta;
}

export default getValores