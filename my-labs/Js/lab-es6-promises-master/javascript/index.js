// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
     
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

            getInstruction("mashedPotatoes", 5, (step6) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;

              document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
  

// Iteration 1 - using callbacks


//---------------------ESTUDIAR DE DIEGO---------------------------


// Iteration 2 - using promises

obtainInstruction("steak", 0).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 1);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 2);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 3);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 4);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 5);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 6);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
  return obtainInstruction("steak", 7);
}).then((paso) => {
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstrutcion("steak", 8);
})

// Iteration 3 using async/await


// async function makeBroccoli(obtainInstruction, step) {

//   const awaitFunction = await obtainInstruction;

//   if (awaitFunction === "broccoli") {
//     document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
//   }
// REPASAR POR QUE ESTABAS SIENDO ERRONEO //
// }
// makeBroccoli();

async function makeBroccoli() {
  const step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
 
  // SEGUNDA MANERA 02
  // await obtainInstruction("broccoli",0);
  // document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`;


  // TERCERA MANERA 03
  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;

  const step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  const step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  const step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

  const step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

  const step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

  ////// ESTE ULTIMO HAY QUE CREARLO ////////////////////////////////////////////
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
////////////////////////////////////////////////////////////////////////////////
}

makeBroccoli();



// --------------MIRAR POR INTERNET Y ACALARARME --------


// Bonus 2 - Promise all

//TENEMOS 7 PASOS , HACER 7 VARIABLES PARA LLAMAR A CADA PASO

const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1 = obtainInstruction("brusselsSprouts", 1);
const paso2 = obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts", 3);
const paso4 = obtainInstruction("brusselsSprouts", 4);
const paso5 = obtainInstruction("brusselsSprouts", 5);
const paso6 = obtainInstruction("brusselsSprouts", 6);
const paso7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7])
  .then((valorDelArray) => {
  valorDelArray.forEach((instruccion) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${instruccion}</li>`;
  });

   //AÑADIR TEXTO Y AÑADIR IMAGEN QUITANDO EL HIDDEN
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    
}).catch((error) => console.log(error));