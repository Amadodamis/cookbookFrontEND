import "./stylesMain/main.css"

import { useState, useRef } from "react";


import Busquedas from "./tableFiltersComponets/Busquedas";
import Table from "./tableFiltersComponets/Table";
import Accordion from "./accordionComponents/Accordion";

function Main({ busquedas, setBusqueda, dataFiltrada, setDataFiltrada }) {

    const [recetasAcordion, setRecetasAcordion] = useState([])



    return (
        <div className="main">
            <section className="results">
                <Busquedas
                    busquedas={busquedas} setBusqueda={setBusqueda}
                />

                <Table
                    busquedas={busquedas}
                    recetasAcordion={recetasAcordion} setRecetasAcordion={setRecetasAcordion}
                    dataFiltrada={dataFiltrada} setDataFiltrada={setDataFiltrada}

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




export default Main;