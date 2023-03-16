
function ContentAccordion(props) {


    const { contentI, selected, procedimiento, ingredientes, apto, porciones } = props

    const mostrarApto = apto.map((ap, l) => (<span className="apto-span" key={l}>{ap}</span>))

    return (
        <div className={selected === contentI ? 'show' : 'content'}>

            <div className="apto-accordion">
                <h3>{mostrarApto}</h3>
            </div>

            <section className="container-receta">
                <div className="container-ingredientes">
                    <h4>Para {porciones} porciones:</h4>

                    {
                        ingredientes.map((ingrediente, j) => (
                            <h5 key={j} >* {ingrediente.ingrediente} {ingrediente.cantidad} <span>{ingrediente.unidad}</span> </h5>
                        ))
                    }
                </div>

                <p className="procedimiento">{procedimiento}</p>
            </section>
        </div>
    )
};

export default ContentAccordion;
