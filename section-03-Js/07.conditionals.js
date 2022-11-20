// const drinkinAge = parseInt(prompt("Want to buy beer? - Let me see ur ID"));

// if (drinkinAge < 18) {
//     console.log("I'm sorry son, but u are too young to be buying alcohol.")
// } else if (drinkinAge === 18) {
//     console.log("You just turned 18, what type of beer would u wnat to enjoy?")
// } else if (drinkinAge >= 18 && drinkinAge < 40) {
//     console.log("Enjoy ur night, but one drink at a time");

// } else if (drinkinAge >= 40) {
//     console.log("Enjoy ur night, remember that the hangover is real!");
// }



// EJEMPLO ---IF---
// -CINE VENDE ENTRADAS, USAR METODO PARSEINT Y PROMPT

// -OFRECEMOS A LOS NIÑOS MENORES DE 15, 20 % descuento
// - MENOR O = 5 GRATIS
// - MAYOR O = 15 o MENOR O = 60.regular
// - MAYOR QUE 60 40 %




const idAge = parseInt(prompt("Let me check ur age to know if i can apply a discount"))

if (idAge <= 5) {
    console.log("You can acces for free");
} else if (idAge < 15 || idAge < 5) {
    console.log("You have a 20% discount!!");
} else if (idAge === 15 || idAge < 60) {
    console.log("You just pay the regular one.");
} else if (idAge > 60) {
    console.log("You have a 40% discount old buddy!!");
}


// EJEMPLO ---SWITCH---

const countryOfOrigin = prompt("What country where you born?").toLowerCase();
switch (countryOfOrigin) {
  case "venezuela":
  case "colombia":
  case "ecuador":
  case "brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "spain":
  case "france":
  case "portugal":
  case "andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
}
