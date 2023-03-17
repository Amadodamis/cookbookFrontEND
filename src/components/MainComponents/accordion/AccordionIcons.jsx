
import { Link } from "react-router-dom"
import editIcon from "../../../img/edit.png"
import closeIcon from "../../../img/close.png"

function AccordionIcons({ id }) {

    return (
        <div className='container-accordion-icons'>

            <div className='container-accordion-icon'>
                <Link to={`edit/${id}`}>
                    <img src={editIcon} alt={'icon-trash'} className={'trash-icon-accordion'} />
                </Link>
            </div>

            <div className='container-accordion-icon'>
                <img src={closeIcon} alt={'icon-trash'} className={'trash-icon-accordion'} />
            </div>

        </div>
    )
};

export default AccordionIcons;
