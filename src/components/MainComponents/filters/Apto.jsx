import trashIcon from "../../../img/trash.png"

export default function Apto({ filtroApto }) {
    return (
        <div className='filter-sector'>

            <h3 className="filter-h3">Apto:</h3>

            {
                filtroApto.length > 0 &&

                filtroApto.map((apto, i) => (

                    <div className='box-filter' key={i}>
                        <span>{apto}</span>
                        <img src={trashIcon} alt={''} className='icon-trash' />
                    </div>
                ))
            }

        </div>
    )
}
