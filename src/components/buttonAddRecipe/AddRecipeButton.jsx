import React from 'react'
import "./addRecipeButton.css"
import { Link } from "react-router-dom"
import nuevaRecetaIcon from "../../img/escribir-nueva-receta.png"

export default function AddRecipeButton() {
    return (

        <div className='container-icon-addRecipe'>
            <Link to="add"><img src={nuevaRecetaIcon} alt="nueva-receta-icon" className='icon-addRecipe' /></Link>
        </div>

    )
}
