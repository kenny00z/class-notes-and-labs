let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

let moddArray = () => {
    let newArray = [];
    myArray.push(9);
    myArray.unshift(0);

    return myArray;
}

console.log(moddArray(myArray));
// YA FUNCIONAAAAAAAAAAAAAA!!!!!!!!!!!!//



