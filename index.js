
const createMovementFormElement = document.querySelector("#añadir-nuevo-movimiento");
const movementListElement = document.querySelector(".movement-list");
const ingresoElement = document.querySelector("#ingreso")


let todosLosMovimientos=[];

inicio()

function inicio (){
  const movimientosFromLocalStorage = localStorage.getItem("movimientoGuardado");
  todosLosMovimientos= JSON.parse(movimientosFromLocalStorage)
  if(todosLosMovimientos){
  drawMovement(todosLosMovimientos)
  calculoIngerosyGastos(todosLosMovimientos)}
  else {todosLosMovimientos=[];}
}

createMovementFormElement.addEventListener("submit",(event)=>
{
    event.preventDefault();


    const inputMonto = document.querySelector("#monto-del-movimiento");
    const inputConcepto= document.querySelector("#nombre-del-movimiento");
    
      todosLosMovimientos.push({
      money: parseFloat(inputMonto.value),
      concept: inputConcepto.value,
      id: Math.floor(Math.random() * 100000000)
      
    }) 
    
    localStorage.setItem("movimientoGuardado", JSON.stringify(todosLosMovimientos));
    const movimientosFromLocalStorage = localStorage.getItem("movimientoGuardado");
    todosLosMovimientos= JSON.parse(movimientosFromLocalStorage)



drawMovement(todosLosMovimientos)
 
calculoIngerosyGastos(todosLosMovimientos)

//vacio imputs.
inputMonto.value = "";
inputConcepto.value= "";      

})

function calculoIngerosyGastos (todosLosMovimientos){
  let arrIngresos=[0]
  let arrGastos=[0]
    for (let i = 0; i <= todosLosMovimientos.length-1 ; i++) {
      if (todosLosMovimientos[i].money >0){
      arrIngresos.push(todosLosMovimientos[i].money)    
    }   else {arrGastos.push((todosLosMovimientos[i].money))}  
  }  
  
  
  let totalIngreso=arrIngresos.reduce(function(a, b){ return a + b; })
  let totalGasto=arrGastos.reduce(function(a, b){ return a + b; })
  let totalAhorro=totalIngreso+totalGasto
  
     
  let ingresoElement = document.querySelector("#ingreso")
  let gastoElement = document.querySelector("#gasto")
  let ahorroElement= document.querySelector("#ahorro-display")
  
  
  ahorroElement.textContent = `${totalAhorro}€`
  ingresoElement.textContent= `${totalIngreso}€`
  gastoElement.textContent= `${totalGasto}€`
}


function deleteMovement(id){
  todosLosMovimientos = todosLosMovimientos.filter(movement => id !== movement.id )
  actualizar(todosLosMovimientos)
  localStorage.setItem("movimientoGuardado", JSON.stringify(todosLosMovimientos));
  todosLosMovimientosActualizados= JSON.parse(movimientosFromLocalStorage)
  inicio(todosLosMovimientosActualizados)

}

function actualizar(movimientos){
  drawMovement(movimientos)
  calculoIngerosyGastos(movimientos)
}

function drawMovement(todosLosMovimientos){
  movementListElement.innerHTML=""
  for (let i = 0; i <= todosLosMovimientos.length-1 ; i++) {
  const movementElement= document.createElement("article");
  movementElement.innerHTML= `
   <p id=pBorrar> ${todosLosMovimientos[i].concept}  :  ${todosLosMovimientos[i].money} €</p> 
   <button id=botonBorrar onclick="deleteMovement(${todosLosMovimientos[i].id})">Borrar Movimiento</button>`
  movementListElement.appendChild(movementElement)}
}






