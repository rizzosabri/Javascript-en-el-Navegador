
const createMovementFormElement = document.querySelector("#añadir-nuevo-movimiento");
const movementListElement = document.querySelector(".movement-list");
const ingresoElement = document.querySelector("#ingreso")


let todosLosMovimientos=[];

createMovementFormElement.addEventListener("submit",(event)=>
{
    event.preventDefault();

    const inputMonto = document.querySelector("#monto-del-movimiento");
    const inputConcepto= document.querySelector("#nombre-del-movimiento");

    let movement =  {
        money: parseFloat(inputMonto.value),
        concept: inputConcepto.value,
      }

// creo array de objetos.
todosLosMovimientos.push({movement}) 

// creo array de gastos e ingresos y la suma de sus totales.
let arrIngresos=[0]
let arrGastos=[0]
  for (let i = 0; i <= todosLosMovimientos.length-1 ; i++) {
    if (todosLosMovimientos[i].movement.money >0){
    arrIngresos.push(todosLosMovimientos[i].movement.money)    
  }   else {arrGastos.push((todosLosMovimientos[i].movement.money))}  
}  


let totalIngreso=arrIngresos.reduce(function(a, b){ return a + b; })
let totalGasto=arrGastos.reduce(function(a, b){ return a + b; })
let totalAhorro=totalIngreso+totalGasto

   
let ingresoElement = document.querySelector("#ingreso")
let gastoElement = document.querySelector("#gasto")
let ahorroElement= document.querySelector("#ahorro-display")


ahorroElement.textContent = totalAhorro
ingresoElement.textContent= totalIngreso
gastoElement.textContent= totalGasto


drawMovements()

//vacio imputs.
inputMonto.value = "";
inputConcepto.value= "";      

})


function drawMovements(){

  movementListElement.innerHTML=""
  todosLosMovimientos.forEach((movement)=>{
  const movementElement= document.createElement("article");
  movementElement.innerHTML= `
   <p> ${movement.movement.concept}  :  ${movement.movement.money} € </p> `
movementListElement.appendChild(movementElement)
})
}





