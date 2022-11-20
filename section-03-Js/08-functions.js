// FUNCTIONS EXAMPLE "EXERCICE"

// let name = "";
// let age = Number;
// let livesIn = {
//     livesInCity: true,
//     livesInTown: false
// }  NO HACE FALTA DECLARAR NADA LA FUNCION TIRA POR SI SOLA LOS ARGUMENTOS SE AÑADIRAN EN LOG EN ESTE CASO //


// EN LA LINEA 14 NO HACE FALTA HACER EL === YA QUE LA PROPIEDAD DE BOOLEAN SE AUTOMATIZA A TRUE SI NO LE AÑADIMOS === EJ: if (place.livesInCity === true) === if (place.livesInCity) //

let myFunction = (name, age, place) => {
    if (place.livesInCity === true) {
        return `${name} tiene ${age} años y vive en la ciudad.`
    } else {
        return `${name} tiene ${age} años y vive en un pueblo.`
    }
    
}

console.log(myFunction("Jarko", 25, { livesInCity: true, livesInTown: false }));

