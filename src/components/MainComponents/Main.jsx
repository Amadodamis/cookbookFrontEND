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
                    recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
                    dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}
                    updateDataFiltrada={updateDataFiltrada} setUpdateDataFiltrada={setUpdateDataFiltrada}
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