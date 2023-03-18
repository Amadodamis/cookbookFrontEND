import "./main.css"

import { useState } from "react";


import Filters from "./filters/Filters";
import Table from "./table/Table";
import Accordion from "./accordion/Accordion";

export default function Main({ busquedas, setBusqueda, dataFiltrada, setDataFiltrada, updateDataFiltrada, setUpdateDataFiltrada }) {

    const [recetasAcordion, setRecetasAcordion] = useState([])


    return (
        <div className="main">
            <section className="results">
                <Filters
                    busquedas={busquedas} setBusqueda={setBusqueda}
                />

                <Table
                    busquedas={busquedas}

                    dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}

                    updateDataFiltrada={updateDataFiltrada} setUpdateDataFiltrada={setUpdateDataFiltrada}

                    recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}

                />
            </section>
            
            {recetasAcordion.length > 0 &&
                <section className="recetas">
                    <Accordion
                        recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}

                    />
                </section>
            }


        </div>

    );
}


/*

 {recetasAcordion.length > 0 &&
                <section className="recetas">
                    <Accordion
                        recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}

                    />
                </section>
            }



*/