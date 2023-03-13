import React from 'react'
import cookbook from "../../img/cookbook.png"

export default function Logo({ ocultarSide }) {


    return (
        <div className="top">
            <div className="logo">
                <img className="img" src={cookbook} alt={"cookbook-icono"} onClick={ocultarSide} />
                <span className="title-logo" >Cookbook</span>
            </div>
        </div>
    )
}
