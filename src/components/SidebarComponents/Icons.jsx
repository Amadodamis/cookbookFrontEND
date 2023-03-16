

export default function Icons(props) {
    const { src, alt, name, busquedas, setBusqueda, functionBusqueda } = props

    const busquedaPorIcon = (e) => {
        let icon = e.target.name.toUpperCase();
        functionBusqueda(icon, busquedas, setBusqueda)
    }


    return (
        <li >
            <div>
                <img className="icons" src={src} alt={alt} onClick={busquedaPorIcon} name={name} />
                <span className="nav-item">{name} </span>
            </div>
            <span className="tooltip">{name}</span>
        </li>
    )
};

