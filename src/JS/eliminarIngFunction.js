function eliminarIngredienteFunction(ing,ingredientes){
    let nuevoArray = ingredientes.filter(ingrediente => ingrediente.ingrediente !== ing)

return nuevoArray;
}

export default eliminarIngredienteFunction

