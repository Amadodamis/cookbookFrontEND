function IconsSideBar(props) {
    const { src, alt, name, busquedas, setBusqueda } = props

    const busquedaPorIcon = (e) => {
        e.preventDefault();
        let nuevaBusqueda = e.target.name;
        nuevaBusqueda=nuevaBusqueda.toUpperCase()

        //si la busqueda esta en el array lo elimina

        if (busquedas.includes(nuevaBusqueda)) {
            let nuevoArray = busquedas.filter(busq => busq !== nuevaBusqueda)
            setBusqueda(nuevoArray)
        }
        // si la busqueda no esta en el array lo agrega
        else {
            setBusqueda([...busquedas, nuevaBusqueda])
        }

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

export default IconsSideBar;
