
import { Link } from "react-router-dom"
import { deleteAcordion } from "../../../JS/acordionFunctions"

import editIcon from "../../../img/edit.png"
import removeIcon from "../../../img/remove.png"

function AccordionIcons({ id }) {




    return (
        <div className='container-accordion-icons'>

            <div className='container-accordion-icon'>
                <Link to={`edit/${id}`}>
                    <img src={editIcon} alt={'icon-trash'} className={'trash-icon-accordion'} />
                </Link>
            </div>

        </div>
    )
};

export default AccordionIcons;
