function parseArrayToString(array) {

    let string = ""

    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {

            if ((index + 1) >= array.length) {
                string = string + array[index] + "--"
            } else {

                string = string + array[index] + "+"
            }

        }
    } else {
        string = string + "--"
    }

    return string
}

function parseSectorToString(value) {
    let string = "--"
    if (value !== "") {
        string = value + "--"
    }

    return string

}



export { parseArrayToString, parseSectorToString }