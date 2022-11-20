// Iteration 1: Names and Input
let hacker1 = "Yisus";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jarko"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if ( hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name. it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length && hacker2.length} characters.`);   
}
// Iteration 3: Loops
let hacker1Upper = "";
for (let i = 0; i < hacker1.length; i++){
  hacker1Upper += hacker1[i].toUpperCase() + " "
}
console.log(hacker1Upper); 

let hackerReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    hackerReverse += hacker1[i];
}
console.log(hackerReverse);

if (hacker1 > hacker2) {
    console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator name goes first definetly");
} else {
    console.log("What?! You both have the same name?");
}    

// BONUS 1 and BONUS 2

//MIRAR DE DIEGO

