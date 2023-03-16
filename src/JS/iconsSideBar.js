import iconCocina from "../img/cocina.png"
import iconPasteleria from "../img/pasteleria.png"
import iconPanaderia from "../img/pan.png"

import iconCeliaco from "../img/celiac.png"
import iconVegan from "../img/vegan.png"


const dataIconsSector = [
    {
        src: iconCocina,
        alt: "cocina-icon",
        name: "Cocina",
    },
    {
        src: iconPasteleria,
        alt: "icon-pasteleria",
        name: "Pasteleria",
    },
    {
        src: iconPanaderia,
        alt: "icon-panaderia",
        name: "Panaderia",
    }
]

const dataIconsApto = [
    {
        src: iconVegan,
        alt: "icon-vegan",
        name: "Vegano",
    },
    {
        src: iconCeliaco,
        alt: "icon-celiaco",
        name: "Celiaco",
    },
]



export  { dataIconsSector, dataIconsApto }
