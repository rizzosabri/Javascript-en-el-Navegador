
const createMovementFormElement = document.querySelector("#añadir-nuevo-movimiento");
const movementListElement = document.querySelector("movement-list");


createMovementFormElement.addEventListener("submit",(event)=>
{
    event.preventDefault();

    const inputMonto = document.querySelector("#monto-del-movimiento");
    const inputConcepto= document.querySelector("#nombre-del-movimiento");

    let movement =  {
        money: parseFloat(inputMonto.value),
        concept: inputConcepto.value,
      }

console.log(movement);

inputMonto.value = "";
inputConcepto.value= "";

    let montoIngreso  =0;
    let montoGasto  =0;
    if (movement.money>0){
        movement.money= montoIngreso;
        }
    else {movement.money= montoGasto;}
     
        

})